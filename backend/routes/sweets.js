const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Sweet = require("../models/Sweet");

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

// Middleware to allow only admin
const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ error: "Admin only" });
  next();
};
// GET all sweets
router.get("/", async (req, res) => {
  const sweets = await Sweet.find();
  res.json(sweets);
});

// SEARCH sweets by name, category, price range
router.get("/search", async (req, res) => {
  const { name, category, minPrice, maxPrice } = req.query;
  const filter = {};

  if (name) filter.name = { $regex: name, $options: "i" };
  if (category) filter.category = category;
  if (minPrice || maxPrice) filter.price = {};
  if (minPrice) filter.price.$gte = Number(minPrice);
  if (maxPrice) filter.price.$lte = Number(maxPrice);

  const sweets = await Sweet.find(filter);
  res.json(sweets);
});

// ADD a new sweet (Admin only)
router.post("/", authenticate, adminOnly, async (req, res) => {
  const { name, category, price, quantity } = req.body;
  const sweet = new Sweet({ name, category, price, quantity });
  await sweet.save();
  res.json(sweet);
});

// UPDATE sweet (Admin only)
router.put("/:id", authenticate, adminOnly, async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sweet);
});

// DELETE sweet (Admin only)
router.delete("/:id", authenticate, adminOnly, async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
});
// PURCHASE a sweet
router.post("/:id/purchase", authenticate, async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) return res.status(404).json({ error: "Sweet not found" });
  if (sweet.quantity <= 0) return res.status(400).json({ error: "Out of stock" });

  sweet.quantity -= 1;
  await sweet.save();
  res.json(sweet);
});

// RESTOCK a sweet (Admin only)
router.post("/:id/restock", authenticate, adminOnly, async (req, res) => {
  const { amount } = req.body;
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet) return res.status(404).json({ error: "Sweet not found" });

  sweet.quantity += amount;
  await sweet.save();
  res.json(sweet);
});

module.exports = router;
