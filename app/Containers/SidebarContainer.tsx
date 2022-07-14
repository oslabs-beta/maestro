import React from "react";
import { Link } from "react-router-dom";
// import MainContainer from "../home/Containers/MainContainer";

const SidebarContainer = () => {
  return (
    <div>
      <div className="sidebar-buttons">
        <Link className="sidebar-link" to="/home">
          Home
        </Link>
        <Link className="sidebar-link" to="/metrics">
          Metrics
        </Link>
        <Link className="sidebar-link" to="/metrics">
          Queries
        </Link>
        <p>HOME</p>
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
