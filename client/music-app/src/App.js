// src/App.js
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import AlbumForm from './components/Albums/AlbumForm';
import AlbumList from './components/Albums/AlbumList';
import SingerForm from './components/Singers/SingerForm';
import SingerList from './components/Singers/SimgerList';
import SongForm from './components/Songs/SongForm';
import SongList from './components/Songs/SongList';
import PublisherForm from './components/Publishers/PublisherForm';
import PublisherList from './components/Publishers/PublisherList';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <h1>Music Application</h1>
        <AlbumForm />
        <AlbumList />
        <SingerForm />
        <SingerList />
        <SongForm />
        <SongList />
        <PublisherForm />
        <PublisherList />
      </div>
    </AuthProvider>
  );
};

export default App;
