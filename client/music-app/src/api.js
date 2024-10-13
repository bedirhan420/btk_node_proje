// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; 

// Auth
export const signup = async (userData) => {
  return await axios.post(`${API_URL}/auth/signup`, userData);
};

export const signin = async (userData) => {
  return await axios.post(`${API_URL}/auth/signin`, userData);
};

// Albums
export const createAlbum = async (data, token) => {
  return await axios.post(`${API_URL}/album/create`, data, {
    headers: { Authorization: token },
  });
};

export const getAllAlbums = async (token) => {
  return await axios.get(`${API_URL}/album/get`, {
    headers: { Authorization: token },
  });
};

export const getAlbumById = async (id, token) => {
  return await axios.get(`${API_URL}/album/getById/${id}`, {
    headers: { Authorization: token },
  });
};

export const updateAlbum = async (id, data, token) => {
  return await axios.put(`${API_URL}/album/update/${id}`, data, {
    headers: { Authorization: token },
  });
};

export const deleteAlbum = async (id, token) => {
  return await axios.delete(`${API_URL}/album/delete/${id}`, {
    headers: { Authorization: token },
  });
};

// Publishers
export const createPublisher = async (data, token) => {
  return await axios.post(`${API_URL}/publisher/create`, data, {
    headers: { Authorization: token },
  });
};

export const getAllPublishers = async (token) => {
  return await axios.get(`${API_URL}/publisher/get`, {
    headers: { Authorization: token },
  });
};

export const getPublisherById = async (id, token) => {
  return await axios.get(`${API_URL}/publisher/getById/${id}`, {
    headers: { Authorization: token },
  });
};

export const updatePublisher = async (id, data, token) => {
  return await axios.put(`${API_URL}/publisher/update/${id}`, data, {
    headers: { Authorization: token },
  });
};

export const deletePublisher = async (id, token) => {
  return await axios.delete(`${API_URL}/publisher/delete/${id}`, {
    headers: { Authorization: token },
  });
};

// Singers
export const createSinger = async (data, token) => {
  return await axios.post(`${API_URL}/singer/create`, data, {
    headers: { Authorization: token },
  });
};

export const getAllSingers = async (token) => {
  return await axios.get(`${API_URL}/singer/get`, {
    headers: { Authorization: token },
  });
};

export const getSingerById = async (id, token) => {
  return await axios.get(`${API_URL}/singer/getById/${id}`, {
    headers: { Authorization: token },
  });
};

export const updateSinger = async (id, data, token) => {
  return await axios.put(`${API_URL}/singer/update/${id}`, data, {
    headers: { Authorization: token },
  });
};

export const deleteSinger = async (id, token) => {
  return await axios.delete(`${API_URL}/singer/delete/${id}`, {
    headers: { Authorization: token },
  });
};

// Songs
export const createSong = async (data, token) => {
  return await axios.post(`${API_URL}/song/create`, data, {
    headers: { Authorization: token },
  });
};

export const getAllSongs = async (token) => {
  return await axios.get(`${API_URL}/song/get`, {
    headers: { Authorization: token },
  });
};

export const getSongById = async (id, token) => {
  return await axios.get(`${API_URL}/song/getById/${id}`, {
    headers: { Authorization: token },
  });
};

export const updateSong = async (id, data, token) => {
  return await axios.put(`${API_URL}/song/update/${id}`, data, {
    headers: { Authorization: token },
  });
};

export const deleteSong = async (id, token) => {
  return await axios.delete(`${API_URL}/song/delete/${id}`, {
    headers: { Authorization: token },
  });
};
