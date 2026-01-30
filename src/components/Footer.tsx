import React, { FC } from "react";
import '../App.css'; // adjust path if needed

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2026 Karl Diether Ortega. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
