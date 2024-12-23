export interface PoleData {
  isEarthOk: boolean;
  isLeakageOk: boolean;
  poleid: string;
}

export interface ProcessedPoleData {
  id: string;
  poleId: string;
  location: string;
  leakageCurrent: {
    status: 'normal' | 'perfect' | 'critical';
  };
  earthingStatus: {
    status: 'normal' | 'perfect' | 'critical';
  };
  comment: string;
  coordinates: [number, number];
}