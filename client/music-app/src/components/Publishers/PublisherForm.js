// src/components/PublisherForm.js
import React, { useState } from 'react';
import { createPublisher } from '../../api';
import { useAuth } from '../../context/AuthContext';

const PublisherForm = () => {
  const [name, setName] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPublisher({ name }, token);
      setName('');
      alert('Publisher created successfully');
    } catch (error) {
      console.error('Error creating publisher:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Publisher</h2>
      <input
        type="text"
        placeholder="Publisher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Create Publisher</button>
    </form>
  );
};

export default PublisherForm;
