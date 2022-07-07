import React from 'react';
import SummaryDataContainer from './SummaryDataContainer'
import AlertsContainer from './AlertsContainer'

const MainContainer = () => {
    return (
        <>
            <div className='main-container'>
                <SummaryDataContainer />
                <AlertsContainer />
            </div>
        </>
    );
}

export default MainContainer