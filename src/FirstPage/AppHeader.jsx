import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <>
      <header>
        <Link  className="site-logo"  to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </>
  );
};

export default AppHeader;
