import strawberryKalakand from "./images/strawberrykalakand.jpeg";
import classicRedVelvet from "./images/classicredvelvet.jpeg";
import berryBar from "./images/Berrybar.jpeg";
import darkTruffles from "./images/darkchocolatetruffles.jpeg";
import strawberryBarks from "./images/Strawberrychocobarks.jpg";
import caramelToffee from "./images/Carameltoffee.webp";
import assortedToffees from "./images/assortedtoffees.webp";
import chocolateHamper from "./images/premiumchocolatehamper.webp";
import strawberryCupcake from "./images/strawberrycupcake.jpg";

const products = [
  {
    id: 1,
    name: "Strawberry Kalakand Cheesecake",
    category: "cake",
    price: 450,
    quantity: 12,
    image: strawberryKalakand
  },
  {
    id: 2,
    name: "Classic Red Velvet Cake",
    category: "cake",
    price: 520,
    quantity: 6,
    image: classicRedVelvet
  },
  {
    id: 3,
    name: "The Berry Bar",
    category: "chocolate",
    price: 245,
    quantity: 15,
    image: berryBar
  },
  {
    id: 4,
    name: "Dark Chocolate Truffles",
    category: "chocolate",
    price: 399,
    quantity: 10,
    image: darkTruffles
  },
  {
    id: 5,
    name: "Strawberry Choco Barks",
    category: "chocolate",
    price: 525,
    quantity: 0, // OUT OF STOCK
    image: strawberryBarks
  },
  {
    id: 6,
    name: "Berry Caramel Toffee",
    category: "toffee",
    price: 350,
    quantity: 8,
    image: caramelToffee
  },
  {
    id: 7,
    name: "Assorted Fruit Toffees",
    category: "toffee",
    price: 280,
    quantity: 20,
    image: assortedToffees
  },
  {
    id: 8,
    name: "Premium Chocolate Hamper",
    category: "chocolate",
    price: 899,
    quantity: 4, // LIMITED
    image: chocolateHamper
  },
  {
    id: 9,
    name: "Mini Strawberry Cupcakes",
    category: "cake",
    price: 320,
    quantity: 14,
    image: strawberryCupcake
  }
];

export default products;
