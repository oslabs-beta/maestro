import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StatusContainer from "./StatusContainer";
import EventsContainer from "./EventsContainer";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MetricsContainer from "../../metrics/Container/MetricsContainer";

const MainContainer = () => {
  return (
    <Router>
      <div className="main-container">
        <div className="sidebar-container">
          <SidebarContainer />
        </div>
        <div className="home-container">
          <Namespace />
          {/* <div className="overview-container">
            <StatusContainer />
            <EventsContainer />
          </div> */}
          <div className='metrics-container'>
            <MetricsContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainContainer;
