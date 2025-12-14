import products from "./products";
import React, { useState, useRef } from "react";
import Login from "./Login";
import Register from "./Register";
import { AuthProvider } from "./AuthContext";
import ProductCard from "./components/ProductCard";


function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [username, setUsername] = useState(localStorage.getItem("username"));

  const [showAuthDropdown, setShowAuthDropdown] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const sweetsRef = useRef(null);
  const footerRef = useRef(null);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("₹ All");

  const handleLogout = () => {
    setToken(null);
    setUsername(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const scrollToSweets = () => {
    sweetsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuthProvider>
      <>
        {/* NAVBAR */}
        <nav className="navbar navbar-expand-lg custom-navbar">
          <div className="container-fluid px-4">
            <span className="navbar-brand fw-bold">Confectionery Shoppe</span>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-1 menu-items">
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={scrollToSweets}
                  >
                    PRODUCTS
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={scrollToFooter}
                  >
                    CONTACT US
                  </button>
                </li>
              </ul>

              <div className="d-flex align-items-center gap-3 ms-auto">
                <div className="nav-filters">
                  <input
                    type="text"
                    placeholder="Search sweets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>All</option>
                    <option>Cakes</option>
                    <option>Chocolates</option>
                    <option>Toffees</option>
                  </select>

                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option>₹ All</option>
                    <option>Below ₹300</option>
                    <option>₹300–₹500</option>
                    <option>Above ₹500</option>
                  </select>
                </div>

                {/* AUTH DROPDOWN */}
                <div className="dropdown auth-area" style={{ position: "relative" }}>
                  <button
                    className="btn p-0 border-0"
                    onClick={() => setShowAuthDropdown(!showAuthDropdown)}
                  >
                    <i className="bi bi-person-circle fs-2"></i>
                  </button>

                  {showAuthDropdown && (
                    <div
                      style={{
                        position: "absolute",
                        right: 0,
                        top: "40px",
                        background: "white",
                        border: "1px solid #ccc",
                        padding: "10px",
                        width: "250px",
                        zIndex: 10,
                      }}
                    >
                      {token ? (
                        <>
                          <p>
                            Hi, <strong>{username}</strong>
                          </p>
                          <button
                            style={{ width: "100%" }}
                            onClick={() => {
                              handleLogout();
                              setShowAuthDropdown(false);
                            }}
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <div style={{ display: "flex", marginBottom: "10px" }}>
                            <button
                              style={{ flex: 1 }}
                              onClick={() => setAuthMode("login")}
                            >
                              Login
                            </button>
                            <button
                              style={{ flex: 1 }}
                              onClick={() => setAuthMode("register")}
                            >
                              Register
                            </button>
                          </div>

                          {authMode === "login" ? (
                            <Login
                              setToken={(token, username) => {
                                setToken(token);
                                setUsername(username);
                                localStorage.setItem("token", token);
                                localStorage.setItem("username", username);
                              }}
                              closeDropdown={() => setShowAuthDropdown(false)}
                            />
                          ) : (
                            <Register
                              closeDropdown={() => setShowAuthDropdown(false)}
                            />
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero-spacer">
          <h1>Handcrafted Sweets & Cakes</h1>
          <p>Freshly made, beautifully crafted, and delivered with love</p>
        </section>

        {/* PRODUCTS */}
        <section ref={sweetsRef} className="product-grid">
  {products
    .filter((item) => {
      // SEARCH
      if (
        search &&
        !item.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return false;
      }

      // CATEGORY
      if (
        category !== "All" &&
        !item.category
          .toLowerCase()
          .includes(category.toLowerCase().slice(0, -1))
      ) {
        return false;
      }

      // PRICE
      if (price === "Below ₹300" && item.price >= 300) return false;
      if (
        price === "₹300–₹500" &&
        (item.price < 300 || item.price > 500)
      )
        return false;
      if (price === "Above ₹500" && item.price <= 500) return false;

      return true;
    })
    .map((item) => (
      <ProductCard
        key={item.id}
        image={item.image}
        title={item.name}
        price={item.price}
        quantity={item.quantity}   // for Purchase button disable
      />
    ))}
</section>

      

        {/* FOOTER */}
        <footer ref={footerRef} className="footer">
          <div className="footer-container">
            <div>
              <h2 className="logo">Confectionery Shoppe</h2>
              <p>Handcrafted Sweets & Cakes</p>
            </div>

            <div className="footer-right">
              <div className="footer-box">
                <h4>PHONE</h4>
                <p>XXXXX-XXXXX</p>
              </div>
              <div className="footer-box">
                <h4>ENQUIRIES</h4>
                <p>info@shoppe.site</p>
              </div>
              <div className="footer-box">
                <h4>ADDRESS</h4>
                <p>
                  Eiffel Tower <br />
                  Paris France
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    </AuthProvider>
  );
}

export default App;
