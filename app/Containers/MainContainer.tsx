import React from 'react';
import SummaryDataContainer from './SummaryDataContainer'
import AlertsContainer from './AlertsContainer'
import Namespace from '../Components/namespace/Namespace';

const MainContainer = () => {
    return (
        <>
            <div className='select-namespace'>
                <Namespace />
            </div>
            <div className='main-container'>
                <SummaryDataContainer />
                <AlertsContainer />
            </div>
        </>
    );
}

export default MainContainer