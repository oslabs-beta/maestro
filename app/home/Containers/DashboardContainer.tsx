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
            <div className="homepage">
                <div className="home-container">
                    <Namespace />
                </div>
                <div>
                    <MainContainer />
                </div>
            </div>
        </div>
    </Router>
    );
}
//className="main-container"
//className="home-container"
export default DashboardContainer
