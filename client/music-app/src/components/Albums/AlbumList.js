// src/components/Albums/AlbumList.js
import React, { useEffect, useState } from 'react';
import { getAllAlbums } from '../../api';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await getAllAlbums(token);
        setAlbums(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, [token]);

  return (
    <div>
      <h2>Albums</h2>
      <ul>
        {albums.map((album) => (
          <li key={album._id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
