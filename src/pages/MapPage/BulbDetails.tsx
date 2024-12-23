import React from 'react';
import { BulbData } from '../../types';
import { StatusPill } from '../../components/StatusPill';

interface BulbDetailsProps {
  bulb: BulbData;
}

export const BulbDetails: React.FC<BulbDetailsProps> = ({ bulb }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold mb-4">Selected Bulb Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Pole ID:</p>
          <p>pole{bulb.poleId}</p>
        </div>
        <div>
          <p className="font-medium">Location:</p>
          <p>{bulb.location}</p>
        </div>
        <div>
          <p className="font-medium">Leakage Current:</p>
          <StatusPill status={bulb.leakageCurrent.status} />
        </div>
        <div>
          <p className="font-medium">Earthing Status:</p>
          <StatusPill status={bulb.earthingStatus.status} />
        </div>
        <div className="col-span-2">
          <p className="font-medium">Comment:</p>
          <p>{bulb.comment}</p>
        </div>
      </div>
    </div>
  );
};