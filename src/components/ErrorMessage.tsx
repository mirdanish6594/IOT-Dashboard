import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-2">
    <AlertTriangle className="w-5 h-5" />
    <span>{message}</span>
  </div>
);