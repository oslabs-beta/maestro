import React from 'react';
import StatusBubble from './StatusBubble'

interface StatusDataProps {
    name: string,
    quantity: number,
    boxes?: any,
}


const StatusCard = ({ name, quantity, boxes }: StatusDataProps): JSX.Element => {
    return (
        <div key='name' className="status-card">
            <div className='status-name'>{name}</div>
            <div className='bubble-box'>{boxes}</div>
            <div className='quantity-box'>{quantity}</div>
        </div>

        // <div className='summary-card'>
        //     <p className='summary-name'>{name}:</p>
        //     <p className='summary-quantity'>{quantity}</p>
        // </div>
    );
};

export default StatusCard;