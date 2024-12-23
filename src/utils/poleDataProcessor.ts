import { PoleData, ProcessedPoleData } from '../types/pole';
import { PUNE_LOCATIONS } from './constants';

const getRandomLocation = () => {
  const randomIndex = Math.floor(Math.random() * PUNE_LOCATIONS.length);
  return PUNE_LOCATIONS[randomIndex];
};

export const processPoleData = (
  key: string,
  data: PoleData
): ProcessedPoleData => {
  const location = getRandomLocation();
  
  // Add some random variation to the coordinates
  const coordinates: [number, number] = [
    location.coordinates[0] + (Math.random() * 0.02 - 0.01),
    location.coordinates[1] + (Math.random() * 0.02 - 0.01)
  ];
  
  const getStatus = (isOk: boolean) => {
    if (isOk === undefined) return 'normal';
    return isOk ? 'perfect' : 'critical';
  };

  const getComment = (isEarthOk: boolean, isLeakageOk: boolean) => {
    if (!isEarthOk && !isLeakageOk) {
      return 'Urgent: Both earthing and leakage issues detected';
    } else if (!isEarthOk) {
      return 'Maintenance required: Earthing issue detected';
    } else if (!isLeakageOk) {
      return 'Maintenance required: Leakage current issue detected';
    }
    return 'No maintenance required';
  };

  return {
    id: key,
    poleId: data.poleid || key.replace('pole', ''),
    location: location.name,
    leakageCurrent: {
      status: getStatus(data.isLeakageOk),
    },
    earthingStatus: {
      status: getStatus(data.isEarthOk),
    },
    comment: getComment(data.isEarthOk, data.isLeakageOk),
    coordinates,
  };
};