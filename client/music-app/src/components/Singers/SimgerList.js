// src/components/SingerList.js
import React, { useEffect, useState } from 'react';
import { getAllSingers, deleteSinger } from '../../api';
import { useAuth } from '../../context/AuthContext';

const SingerList = () => {
  const [singers, setSingers] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchSingers = async () => {
      try {
        const response = await getAllSingers(token);
        setSingers(response.data);
      } catch (error) {
        console.error('Error fetching singers:', error);
      }
    };

    fetchSingers();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deleteSinger(id, token);
      setSingers(singers.filter(singer => singer._id !== id));
    } catch (error) {
      console.error('Error deleting singer:', error);
    }
  };

  return (
    <div>
      <h2>Singer List</h2>
      <ul>
        {singers.map(singer => (
          <li key={singer._id}>
            {singer.name}
            <button onClick={() => handleDelete(singer._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingerList;
