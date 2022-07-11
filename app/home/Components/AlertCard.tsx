import React from 'react';

interface AlertCard {
    group: any,
    state: any,
    name: any,
    severity: any,
    description: any,
    summary: any,
    // alerts: any
}

const AlertCard = ({ group, state, name, severity, description, summary }: AlertCard): JSX.Element => {

    return (
        <>
            <div className='alert'>
                <p className='alert-description'>Group: {group}</p>
                <p className='alert-description'>State: {state}</p>
                <p className='alert-description'>Name: {name}</p>
                <p className='alert-description'>Severity: {severity}</p>
                <p className='alert-description'>Description: {description}</p>
                <p className='alert-description'>Summary: {summary}</p>
                {/* <p>Alerts: {alerts}</p> */}
            </div>
        </>
    );
};

export default AlertCard;