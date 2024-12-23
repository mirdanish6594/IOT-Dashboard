import React from 'react';
import { BulbData } from '../../types';
import { BulbTableHeader } from './BulbTableHeader';
import { BulbTableRow } from './BulbTableRow';

interface BulbTableProps {
  bulbs: BulbData[];
}

export const BulbTable: React.FC<BulbTableProps> = ({ bulbs }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <BulbTableHeader />
        <tbody className="bg-white divide-y divide-gray-200">
          {bulbs.map((bulb) => (
            <BulbTableRow key={bulb.id} bulb={bulb} />
          ))}
        </tbody>
      </table>
    </div>
  );
};