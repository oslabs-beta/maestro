import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdOutlineQueryStats } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";


const SidebarContainer = () => {
  return (
    <div className="sidebar-container">
      <img src="../assets/logo-cube.png" alt="logo" />
      <div className="sidebar-buttons">
        
        <Link className="sidebar-link" to="/">
          <MdHome />
        </Link>
        <Link className="sidebar-link" to="/metrics">
          <VscGraphLine />
        </Link>
        <Link className="sidebar-link" to="/queries">
          <MdOutlineQueryStats />
        </Link>
      </div>
    </div>
  );
};

export default SidebarContainer;
