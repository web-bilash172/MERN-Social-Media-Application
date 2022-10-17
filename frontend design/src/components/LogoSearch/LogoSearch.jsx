import React from "react";
import Logo from "../../img/logo.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="" />
      <div className="search">
        <input type="text" placeholder="Search" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
