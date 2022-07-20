import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MainContainer from "./MainContainer";

const DashboardContainer = () => {
  return (
    <Router>
      <div className="dashboard">
        <SidebarContainer />
        <div> 
          <div className="home-container">
            <div className="header">
              <div className="header-elements">
                <Namespace />
                <h1 className="logo">Maestro</h1>
              </div>
            </div>
          </div>
          <div className="main-container">
            <MainContainer />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default DashboardContainer;