// src/components/SingerForm.js
import React, { useState } from 'react';
import { createSinger } from '../../api';
import { useAuth } from '../../context/AuthContext';

const SingerForm = () => {
  const [name, setName] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSinger({ name }, token);
      setName('');
      alert('Singer created successfully');
    } catch (error) {
      console.error('Error creating singer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Singer</h2>
      <input
        type="text"
        placeholder="Singer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Create Singer</button>
    </form>
  );
};

export default SingerForm;
