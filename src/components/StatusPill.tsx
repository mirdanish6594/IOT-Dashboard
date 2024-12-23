import React from 'react';
import { BulbStatus } from '../types';
import { clsx } from 'clsx';

interface StatusPillProps {
  status: BulbStatus;
}

export const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  return (
    <span
      className={clsx(
        'px-3 py-1 rounded-full text-sm font-medium',
        {
          'bg-green-100 text-green-800': status === 'perfect',
          'bg-yellow-100 text-yellow-800': status === 'normal',
          'bg-red-100 text-red-800': status === 'critical',
        }
      )}
    >
      {status}
    </span>
  );
};