import React, { useState } from "react";
import logo from "../images/banner4.png";
import { useAuth } from "../AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Navbar = () => {
  const { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim()) {
      login(username.trim());
      setShowLogin(false);
      setUsername("");
      setPassword("");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (regName.trim()) {
      login(regName.trim()); // use name as display
      setShowRegister(false);
      setRegName("");
      setRegEmail("");
      setRegPass("");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid px-4">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" className="logo-img" />
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-1 menu-items">
              <li className="nav-item"><a className="nav-link" href="#">PRODUCTS</a></li>
              <li className="nav-item"><a className="nav-link" href="#">CONTACT US</a></li>
            </ul>

            <div className="d-flex align-items-center gap-3 ms-auto">
              <div className="nav-filters">
                <input id="searchInput" placeholder="Search sweets..." />
                <select id="categoryFilter">
                  <option value="all">All</option>
                  <option value="cake">Cakes</option>
                  <option value="chocolate">Chocolates</option>
                  <option value="toffee">Toffees</option>
                </select>
                <select id="priceFilter">
                  <option value="all">₹ All</option>
                  <option value="low">Below ₹300</option>
                  <option value="mid">₹300–₹500</option>
                  <option value="high">Above ₹500</option>
                </select>
              </div>

              {/* Auth Dropdown */}
              <div className="dropdown auth-area">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-person-circle fs-2"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  {user ? (
                    <>
                      <li className="dropdown-item-text">Hi, {user.username}!</li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>
                        <button
                          className="dropdown-item logout-link"
                          onClick={logout}
                        >
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => setShowLogin(true)}
                        >
                          Login
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => setShowRegister(true)}
                        >
                          Register
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <div className={`modal fade ${showLogin ? "show d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: showLogin ? "rgba(0,0,0,0.5)" : "" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Login</h5>
              <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
            </div>
            <form onSubmit={handleLogin}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowLogin(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Register Modal */}
      <div className={`modal fade ${showRegister ? "show d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: showRegister ? "rgba(0,0,0,0.5)" : "" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button type="button" className="btn-close" onClick={() => setShowRegister(false)}></button>
            </div>
            <form onSubmit={handleRegister}>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={regName}
                    onChange={(e) => setRegName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={regPass}
                    onChange={(e) => setRegPass(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowRegister(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;