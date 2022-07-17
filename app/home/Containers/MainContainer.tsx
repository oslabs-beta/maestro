import React from "react";
import { Routes, Route } from "react-router-dom";
import MetricsContainer from "../../metrics/Container/MetricsContainer";
import OverviewContainer from "./OverviewContainer";

const MainContainer = () => {
  return (
    <div className="main">
      <Routes>
        
          <Route path="/" element={<OverviewContainer/>} />
          <Route path="/metrics" element={<MetricsContainer />} />
        
      </Routes>
    </div>
  );
};



export default MainContainer;
 