import React from 'react';

interface summaryCardDataProps {
    name: string,
    quantity: number
}


const SummaryDataCard = ({ name, quantity }: summaryCardDataProps): JSX.Element => {
    return (
        <div className='summary-card'>
            <p className='summary-name'>{name}:</p>
            <p className='summary-quantity'>{quantity}</p>
        </div>
    );
};

export default SummaryDataCard;