import css from './Bed.module.css'
import { useState, useEffect } from 'react';
import { ref, onValue, set, off } from 'firebase/database';
import { database } from '../../firebaseConfig';

export const Bed = ({ roomNumber, id }) => {
  const bedKey = `room-${roomNumber}-bed-${id}`;
  const [isOccupied, setIsOccupied] = useState(false);

  useEffect(() => {
    const bedRef = ref(database, bedKey);
    
    const unsubscribe = onValue(bedRef, (snapshot) => {
      const savedStatus = snapshot.val();
      if (savedStatus !== null) {
        setIsOccupied(savedStatus);
      }
    });

    // Clean up the listener on component unmount
    return () => off(bedRef);
  }, [bedKey]);

  const bedStatus = () => {
    const newStatus = !isOccupied;
    setIsOccupied(newStatus);
    set(ref(database, bedKey), newStatus);
  };

  return <div  className={!isOccupied ? css.false : css.true} onClick={bedStatus}>{`Bed ${id}`}</div>;
};
