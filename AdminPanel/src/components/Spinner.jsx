import React from 'react';
import { PulseLoader } from 'react-spinners';
import '../App.css';

export default function Spinner({
  loading = false,
  color = '#400945',
  size = 12,
  margin = 6,
  height = '200px'
}) {
  if (!loading) return null;
  return (
    <div className="spinner-container" style={{ height }}>
      <PulseLoader color={color} size={size} margin={margin} />
    </div>
  );
}
