import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import StatusContainer from "./StatusContainer";
import EventsContainer from "./EventsContainer";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MetricsContainer from "../../metrics/Container/MetricsContainer";

const OverviewContainer = () => {
  return (
    <div className="overview-container">
    <StatusContainer />
    <EventsContainer />
    </div>
  );
};

// const MainContainer = () => {
//   return (
//     <>
//     <div className="main-container"> 
//        <div className="sidebar-container">
//          <SidebarContainer />
//        </div>
//     </div>
//     </>
//   );
// };

export default OverviewContainer;