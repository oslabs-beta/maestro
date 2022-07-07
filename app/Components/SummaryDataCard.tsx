import React from 'react';

interface summaryCardDataProps {
    name: string,
    quantity: any
}


const SummaryDataCard = ({ name, quantity }: summaryCardDataProps): JSX.Element => {
    return (
        <div className='summary-card'>
            <p>{name}:</p>
            <p>{quantity}</p>
        </div>
    );
};

export default SummaryDataCard;