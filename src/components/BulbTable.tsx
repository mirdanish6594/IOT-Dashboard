import React from 'react';
import { BulbData } from '../types';
import { StatusPill } from './StatusPill';

interface BulbTableProps {
  bulbs: BulbData[];
}

export const BulbTable: React.FC<BulbTableProps> = ({ bulbs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pole ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Leakage Current</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Earthing Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bulbs.map((bulb) => (
            <tr key={bulb.id}>
              <td className="px-6 py-4 whitespace-nowrap">{bulb.poleId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{bulb.location}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <StatusPill status={bulb.leakageCurrent.status} />
                  <span className="text-sm text-gray-600">
                    ({bulb.leakageCurrent.value} mA)
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <StatusPill status={bulb.earthingStatus.status} />
                  <span className="text-sm text-gray-600">
                    ({bulb.earthingStatus.value}%)
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{bulb.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};