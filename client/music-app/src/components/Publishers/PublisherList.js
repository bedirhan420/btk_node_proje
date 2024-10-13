// src/components/PublisherList.js
import React, { useEffect, useState } from 'react';
import { getAllPublishers, deletePublisher } from '../../api';
import { useAuth } from '../../context/AuthContext';

const PublisherList = () => {
  const [publishers, setPublishers] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchPublishers = async () => {
      try {
        const response = await getAllPublishers(token);
        setPublishers(response.data);
      } catch (error) {
        console.error('Error fetching publishers:', error);
      }
    };

    fetchPublishers();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deletePublisher(id, token);
      setPublishers(publishers.filter(publisher => publisher._id !== id));
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };

  return (
    <div>
      <h2>Publisher List</h2>
      <ul>
        {publishers.map(publisher => (
          <li key={publisher._id}>
            {publisher.name}
            <button onClick={() => handleDelete(publisher._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublisherList;
