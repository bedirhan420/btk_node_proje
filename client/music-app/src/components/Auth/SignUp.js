// src/components/Auth/Signup.js
import React, { useState } from 'react';
import { signup } from '../../api';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ username, email, password, role });
      console.log(response.data);
      // Redirect or show success message
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
      <select onChange={(e) => setRole(e.target.value)} value={role}>
        <option value="user">User</option>
        <option value="singer">Singer</option>
        <option value="publisher">Publisher</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
