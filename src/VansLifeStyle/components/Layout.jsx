import React from "react";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="site-wrapper">
        <AppHeader />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
