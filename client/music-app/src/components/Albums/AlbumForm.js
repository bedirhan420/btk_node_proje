// src/components/Albums/AlbumForm.js
import React, { useState } from 'react';
import { createAlbum } from '../../api';

const AlbumForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const token = localStorage.getItem('token');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await createAlbum({ title }, token);
      onSuccess(); // Callback to refresh album list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleCreate}>
      <input type="text" placeholder="Album Title" onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Create Album</button>
    </form>
  );
};

export default AlbumForm;
