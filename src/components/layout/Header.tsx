import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Map, AlertTriangle } from 'lucide-react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4">
        <div className="flex items-center space-x-8 h-16">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/map"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <Map className="w-5 h-5" />
            <span>Map</span>
          </Link>
          <Link
            to="/alerts"
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          >
            <AlertTriangle className="w-5 h-5" />
            <span>Alerts</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};