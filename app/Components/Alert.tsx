import React from 'react';

interface Alert {
    group: any,
    state: any,
    name: any,
    severity: any,
    description: any,
    summary: any,
    // alerts: any
}

const Alert = ({ group, state, name, severity, description, summary }: Alert): JSX.Element => {

    return (
        <>
            <p>Group: {group}</p>
            <p>State: {state}</p>
            <p>Name: {name}</p>
            <p>Severity: {severity}</p>
            <p>Description: {description}</p>
            <p>Summary: {summary}</p>
            {/* <p>Alerts: {alerts}</p> */}
        </>
    );
};

export default Alert;