import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import StatusContainer from "./StatusContainer";
import EventsContainer from "./EventsContainer";
import Namespace from "../../Components/namespace/Namespace";
import SidebarContainer from "../../Containers/SidebarContainer";
import MetricsContainer from "../../metrics/Container/MetricsContainer";
import OverviewContainer from "./OverviewContainer";
import MainContainer from "./MainContainer";


const DashboardContainer = () => {
    return (
    <Router>
        <div className="main-container">
            <SidebarContainer />
            <MainContainer />
         <div className="home-container">
            <Namespace />
        </div>
        </div>
    </Router>
    );
}

export default DashboardContainer
