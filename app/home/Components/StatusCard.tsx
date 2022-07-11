import React from 'react';
import StatusBubble from './StatusBubble'

interface StatusDataProps {
    name: string,
    quantity: number
}


const StatusCard = ({ name, quantity }: StatusDataProps): JSX.Element => {
    return (
        <div className="status-card">
            <div>Name</div>
            <StatusBubble />
            <div>qty</div>
        </div>

        // <div className='summary-card'>
        //     <p className='summary-name'>{name}:</p>
        //     <p className='summary-quantity'>{quantity}</p>
        // </div>
    );
};

export default StatusCard;