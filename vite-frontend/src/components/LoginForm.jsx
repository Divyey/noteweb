import React, { useState } from 'react';
import axios from 'axios';
import CreateUser from "./CreateUser";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [responseMsg, setResponseMsg] = useState('');
  const [showCreate, setShowCreate] = useState(false); // 👈 Minimal toggle state

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append('username', formData.username);
    data.append('password', formData.password);

    try {
      const response = await axios.post('http://127.0.0.1:3000/auth/token', data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      localStorage.removeItem('access_token');
      localStorage.setItem('access_token', response.data.access_token);

      setResponseMsg('Login successful! Redirecting...');
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (error) {
      setResponseMsg(
        error.response ? error.response.data.detail || 'Login failed' : 'Network error'
      );
    }
  };

  // ✅ Minimal addition: swap between Login and CreateUser
  if (showCreate) {
    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <CreateUser />
        <p style={{ marginTop: '1rem' }}>
          Already have an account?{' '}
          <button onClick={() => setShowCreate(false)}>Go to Login</button>
        </p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {responseMsg && <p style={{ marginTop: '1rem' }}>{responseMsg}</p>}

      <p style={{ marginTop: '1rem' }}>
        Don't have an account?{' '}
        <button onClick={() => setShowCreate(true)}>Create one</button>
      </p>
    </div>
  );
};

export default LoginForm;
