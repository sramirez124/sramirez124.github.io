// components/BusSearch.js
import React, { useState } from 'react';
import Fetch from './Fetch';

function BusSearch() {
  const [routeNumber, setRouteNumber] = useState('');
  const [buses, setBuses] = useState([]);

  const handleSearch = async () => {
    try{
        const response = await Fetch.get(`getvehicles?key=${API_KEY}&rt=${routeNumber}`);
        setBuses(response.data.buses);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div>
      <input
        type="text"
        value={routeNumber}
        onChange={(e) => setRouteNumber(e.target.value)}
        placeholder="Enter route number"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id}>
            {bus.route} {bus.direction}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusSearch;