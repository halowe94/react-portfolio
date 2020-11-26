import React from "react";
import "./Nav.css";
//import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar">
      <a className="navbar-brand" href="/">
        Your personal CMS
      </a>
    </nav>
  );
}

export default Nav;
