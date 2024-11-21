// components/BusMap.js
import React from 'react';
import { Map, Marker } from 'react';

const BusMap = ({ buses }) => {
  return (
    <Map center={[41.8781, -87.6298]} zoom={12}>
      {buses.map((bus) => (
        <Marker key={bus.id} position={[bus.lat, bus.lon]} />
      ))}
    </Map>
  );
};

export default BusMap;