import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="">
        <p className="">Copyright &copy; Nifusion {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
