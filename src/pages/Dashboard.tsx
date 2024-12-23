import React from 'react';
import { BulbTable } from '../components/BulbTable';
import { Lightbulb } from 'lucide-react';
import { usePoleData } from '../hooks/usePoleData';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const Dashboard: React.FC = () => {
  const { poles, loading, error } = usePoleData();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Lightbulb className="w-8 h-8 text-yellow-500" />
        <h1 className="text-3xl font-bold">Smart Bulb Monitoring Dashboard</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          <BulbTable bulbs={poles} />
        )}
      </div>
    </div>
  );
};