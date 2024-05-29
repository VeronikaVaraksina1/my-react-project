// import { useEffect, useState } from 'react';
import { Bed } from '../Bed/Bed';
import css from './Room.module.css'

export const Room = ({ number }) => {
  return <div > {`This room #${number}`}
    <div><Bed roomNumber={number} id={1} /></div>
    <div><Bed roomNumber={number} id={2} /></div>
    <div><Bed roomNumber={number} id={3} /></div>
    <div><Bed roomNumber={number} id={4} /></div>
  </div>;
};
