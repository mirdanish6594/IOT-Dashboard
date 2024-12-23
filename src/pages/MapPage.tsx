import React, { useState } from 'react';
import { MapView } from '../components/MapView';
import { BulbData } from '../types';
import { StatusPill } from '../components/StatusPill';

export const MapPage: React.FC<{ bulbs: BulbData[] }> = ({ bulbs }) => {
  const [selectedBulb, setSelectedBulb] = useState<BulbData | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bulb Locations</h1>
      
      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapView bulbs={bulbs} onBulbSelect={setSelectedBulb} />
        </div>

        {selectedBulb && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Selected Bulb Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Pole ID:</p>
                <p>{selectedBulb.poleId}</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p>{selectedBulb.location}</p>
              </div>
              <div>
                <p className="font-medium">Leakage Current:</p>
                <StatusPill status={selectedBulb.leakageCurrent.status} />
              </div>
              <div>
                <p className="font-medium">Earthing Status:</p>
                <StatusPill status={selectedBulb.earthingStatus.status} />
              </div>
              <div className="col-span-2">
                <p className="font-medium">Comment:</p>
                <p>{selectedBulb.comment}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};