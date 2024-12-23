export type BulbStatus = 'normal' | 'perfect' | 'critical';

export interface BulbData {
  id: string;
  poleId: string;
  location: string;
  leakageCurrent: {
    status: BulbStatus;
  };
  earthingStatus: {
    status: BulbStatus;
  };
  comment: string;
  coordinates: [number, number];
}