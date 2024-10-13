// src/components/SongForm.js
import React, { useState } from 'react';
import { createSong } from '../../api';
import { useAuth } from '../../context/AuthContext';

const SongForm = () => {
  const [title, setTitle] = useState('');
  const [duration, setDuration] = useState('');
  const [singer, setSinger] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const { token } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSong({ title, duration, singer, fileUrl }, token);
      setTitle('');
      setDuration('');
      setSinger('');
      setFileUrl('');
      alert('Song created successfully');
    } catch (error) {
      console.error('Error creating song:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Song</h2>
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Duration (seconds)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Singer ID"
        value={singer}
        onChange={(e) => setSinger(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="File URL"
        value={fileUrl}
        onChange={(e) => setFileUrl(e.target.value)}
        required
      />
      <button type="submit">Create Song</button>
    </form>
  );
};

export default SongForm;
