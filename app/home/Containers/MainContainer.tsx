import React from 'react';
import StatusContainer from './StatusContainer'
import EventsContainer from './EventsContainer'
import Namespace from '../../Components/namespace/Namespace';
import SidebarContainer from '../../Containers/SidebarContainer';

const MainContainer = () => {
    return (

        <div className="main-container">
            <div className="sidebar-container">
                <SidebarContainer /> 
            </div>
            <div className='home-container'>
                <Namespace />
                <div className='overview-container'>
                    <StatusContainer /> 
                    <EventsContainer />
                </div>
            </div> 
        </div>
         
    );
}

export default MainContainer 