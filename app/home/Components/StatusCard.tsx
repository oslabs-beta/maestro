import React from 'react';

interface StatusDataProps {
  name: string,
  quantity: number,
  boxes: any,
}

function StatusCard({ name, quantity, boxes }: StatusDataProps): JSX.Element {
  return (
    <div key="name" className="status-card">
      <div className="status-name">{name}</div>
      <div className="bubble-box">{boxes}</div>
      <div className="quantity-box">{quantity}</div>
    </div>
  );
}

export default StatusCard;
