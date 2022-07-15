import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdOutlineQueryStats } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const SidebarContainer = () => {
  return (
    <div className="sidebar-container">
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
// import {
//   ProSidebar,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";
// import "react-pro-sidebar/dist/css/styles.css";

// function SidebarContainer() {
//   return (
//     <ProSidebar>
//       <SidebarHeader>
//         {/**
//          *  You can add a header for the sidebar ex: logo
//          */}
//       </SidebarHeader>
//       <SidebarContent>
//         {/**
//          *  You can add the content of the sidebar ex: menu, profile details, ...
//          */}
//       </SidebarContent>
//       <SidebarFooter>
//         {/**
//          *  You can add a footer for the sidebar ex: copyright
//          */}
//       </SidebarFooter>
//     </ProSidebar>
//   );
// }

// TO DO: Add buttons

export default SidebarContainer;
