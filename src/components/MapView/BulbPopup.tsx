import React from 'react';
import { Popup } from 'react-leaflet';
import { BulbData } from '../../types';
import { StatusPill } from '../StatusPill';

interface BulbPopupProps {
  bulb: BulbData;
}

export const BulbPopup: React.FC<BulbPopupProps> = ({ bulb }) => {
  return (
    <Popup>
      <div className="space-y-2">
        <h3 className="font-bold">pole{bulb.poleId}</h3>
        <p className="text-sm">Location: {bulb.location}</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm">Leakage Current:</span>
            <StatusPill status={bulb.leakageCurrent.status} />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Earthing Status:</span>
            <StatusPill status={bulb.earthingStatus.status} />
          </div>
        </div>
      </div>
    </Popup>
  );
};