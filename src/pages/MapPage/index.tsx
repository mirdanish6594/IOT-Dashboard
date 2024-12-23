import React, { useState } from 'react';
import { MapView } from '../../components/MapView';
import { BulbDetails } from './BulbDetails';
import { BulbData } from '../../types';

interface MapPageProps {
  bulbs: BulbData[];
  loading: boolean;
}

export const MapPage: React.FC<MapPageProps> = ({ bulbs, loading }) => {
  const [selectedBulb, setSelectedBulb] = useState<BulbData | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Bulb Locations</h1>
      
      <div className="grid gap-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <MapView bulbs={bulbs} onBulbSelect={setSelectedBulb} />
        </div>

        {selectedBulb && <BulbDetails bulb={selectedBulb} />}
      </div>
    </div>
  );
};