import React from 'react';
import { BulbData } from '../types';
import { BulbTable } from '../components/BulbTable';
import { AlertTriangle } from 'lucide-react';

export const Alerts: React.FC<{ bulbs: BulbData[] }> = ({ bulbs }) => {
  const criticalBulbs = bulbs.filter(
    (bulb) =>
      bulb.leakageCurrent.status === 'critical' ||
      bulb.earthingStatus.status === 'critical'
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <AlertTriangle className="w-8 h-8 text-red-500" />
        <h1 className="text-3xl font-bold">Critical Alerts</h1>
      </div>

      {criticalBulbs.length > 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <BulbTable bulbs={criticalBulbs} />
        </div>
      ) : (
        <div className="bg-green-50 text-green-800 p-4 rounded-lg">
          No critical alerts at this time.
        </div>
      )}
    </div>
  );
};