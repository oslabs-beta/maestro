import React from "react";
import { Routes, Route } from "react-router-dom";
import MetricsContainer from "../../metrics/Container/MetricsContainer";
import OverviewContainer from "./OverviewContainer";

const MainContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<OverviewContainer/>} />
      <Route path="/metrics" element={<MetricsContainer />} />
    </Routes>
  );
};



export default MainContainer;
 