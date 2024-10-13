// src/components/SongList.js
import React, { useEffect, useState } from 'react';
import { getAllSongs, deleteSong } from '../../api';
import { useAuth } from '../../context/AuthContext';

const SongList = () => {
  const [songs, setSongs] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await getAllSongs(token);
        setSongs(response.data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs();
  }, [token]);

  const handleDelete = async (id) => {
    try {
      await deleteSong(id, token);
      setSongs(songs.filter(song => song._id !== id));
    } catch (error) {
      console.error('Error deleting song:', error);
    }
  };

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map(song => (
          <li key={song._id}>
            {song.title} - Duration: {song.duration} seconds
            <button onClick={() => handleDelete(song._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
