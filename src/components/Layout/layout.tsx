import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import './layout.css'

const Layout = ({ children }: { children: any }) => {
  return (
    <React.Fragment>
      <div className="layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
