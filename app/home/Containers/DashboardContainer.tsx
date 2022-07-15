import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MainContainer from "./MainContainer";


const DashboardContainer = () => {
    return (
    <Router>
        <div className="home-container">
            <Namespace />
        </div>
        <div className="main-container">
            <SidebarContainer />
            <MainContainer />
        </div>
    </Router>
    );
}

export default DashboardContainer
