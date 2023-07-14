import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMotorcycles } from '../actions/motorcycleActions';

function Motorcycles() {
  const dispatch = useDispatch();
  const motorcycles = useSelector((state) => state.motorcycles);

  useEffect(() => {
    dispatch(fetchMotorcycles());
  }, [dispatch]);

  return (
    <div>
      <h1>Motorcycles</h1>
      {motorcycles.map((motorcycle) => (
        <div key={motorcycle.id}>
          <h3>{motorcycle.model}</h3>
          <p>{motorcycle.description}</p>
          {/* Render other motorcycle details as needed */}
        </div>
      ))}
    </div>
  );
}

export default Motorcycles;
