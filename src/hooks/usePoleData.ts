import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../utils/firebase';
import { ProcessedPoleData, PoleData } from '../types/pole';
import { processPoleData } from '../utils/poleDataProcessor';
import toast from 'react-hot-toast';

export const usePoleData = () => {
  const [poles, setPoles] = useState<ProcessedPoleData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const polesRef = ref(db, 'pole_data');
    
    const unsubscribe = onValue(polesRef, (snapshot) => {
      try {
        const data = snapshot.val();
        if (!data) {
          setPoles([]);
          return;
        }

        // Process all poles from the database
        const processedPoles = Object.entries(data)
          .filter(([key]) => /^pole\d+$/.test(key)) // Filter for keys that match pole[0-9]+
          .map(([key, value]) => {
            const poleData = value as PoleData;
            if (!poleData) return null;
            
            const processed = processPoleData(key, poleData);
            
            // Check for critical status
            if (processed.leakageCurrent.status === 'critical' || 
                processed.earthingStatus.status === 'critical') {
              toast.error(`Critical status detected for Pole ${processed.poleId}!`, {
                icon: '⚠️',
              });
            }
            
            return processed;
          })
          .filter((pole): pole is ProcessedPoleData => pole !== null);

        setPoles(processedPoles);
        setError(null);
      } catch (err) {
        setError('Error fetching pole data');
        console.error('Error processing pole data:', err);
      } finally {
        setLoading(false);
      }
    }, (error) => {
      setError('Error connecting to database');
      console.error('Database error:', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { poles, loading, error };
};