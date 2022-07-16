import React from "react";
import StatusContainer from "./StatusContainer";
import EventsContainer from "./EventsContainer";


const OverviewContainer = () => {
  return (
    <div className="overview-container">
        <StatusContainer />
        <EventsContainer />
    </div>
  );
};

export default OverviewContainer;