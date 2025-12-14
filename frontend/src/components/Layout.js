import React from "react";
import Navbar from "./Navbar";        // ← same folder
import Footer from "./Footer";        // ← same folder
import HomePage from "./HomePage";     // ← same folder
import { AuthProvider } from "../AuthContext.js";
function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;