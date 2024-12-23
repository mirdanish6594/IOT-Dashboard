import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BulbData } from '../types';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

interface MapViewProps {
  bulbs: BulbData[];
  onBulbSelect: (bulb: BulbData) => void;
}

export const MapView: React.FC<MapViewProps> = ({ bulbs, onBulbSelect }) => {
  const customIcon = new Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={[18.5204, 73.8567]} // Pune coordinates
      zoom={13}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {bulbs.map((bulb) => (
        <Marker
          key={bulb.id}
          position={bulb.coordinates}
          icon={customIcon}
          eventHandlers={{
            click: () => onBulbSelect(bulb),
          }}
        >
          <Popup>
            <div>
              <h3 className="font-bold">Pole ID: {bulb.poleId}</h3>
              <p>Location: {bulb.location}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};