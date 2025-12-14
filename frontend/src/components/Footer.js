import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2 className="logo">Confectionary Shoppe</h2>
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
            <p>Eiffel Tower<br />Paris France</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Sample Sweet Shop Website</p>
        <p>Looking at it makes me hungry</p>
      </div>
    </footer>
  );
};

export default Footer;
