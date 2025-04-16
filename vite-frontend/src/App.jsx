import React from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import CreateUser from './components/CreateUser';
import "./App.css"

function App() {
  const token = localStorage.getItem('access_token'); // Check if token exists

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    sessionStorage.removeItem('user_created'); // Clear flag too if needed
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome to Secure Notes Application!</h1>

      {token ? (
        <div>
          {/* Only show CreateUser if not stored in session */}

          <button onClick={handleLogout}>Clear Session</button>
          <Dashboard />
        </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;
