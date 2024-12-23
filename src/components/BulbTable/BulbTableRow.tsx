import React from 'react';
import { BulbData } from '../../types';
import { StatusPill } from '../StatusPill';

interface BulbTableRowProps {
  bulb: BulbData;
}

export const BulbTableRow: React.FC<BulbTableRowProps> = ({ bulb }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">pole{bulb.poleId}</td>
      <td className="px-6 py-4 whitespace-nowrap">{bulb.location}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusPill status={bulb.leakageCurrent.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <StatusPill status={bulb.earthingStatus.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{bulb.comment}</td>
    </tr>
  );
};