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
      <div className='alert-card'>
        <div className='alert-line'>
         <div className='alert-description'>Severity:</div>
         <div className='alert-content-severity'>{severity[0].toUpperCase() + severity.slice(1)}</div>
        </div>
        <div className='alert-line'>
         <div className='alert-description'>State:</div>
         <div className='alert-content-state'>{state[0].toUpperCase() + state.slice(1)}</div>
        </div>
        <div className='alert-line'>
         <div className='alert-description'>Group:</div>
         <div className='alert-content-group'>{group}</div>
        </div>

        <div className='alert-line'>
         <div className='alert-description'>Name:</div>
         <div className='alert-content-name'>{name}</div>
        </div>
        <div className='alert-line'>
         <div className='alert-description'>Description:</div>
         <div className='alert-content-description'>{description}</div>
        </div>
        <div className='alert-line'>
         <div className='alert-description'>Summary:</div>
         <div className='alert-content-summary'>{summary}</div>
        </div>
        {/* <div className='alert-line'>
         <div className='alert-description'>Alerts:</div>
         <div className='alert-content'>{alerts}</div>
        </div> */}
      </div>
    </>
);
};

export default AlertCard;