import React from 'react';

function SocietySecretaryPage({ user, onLogout }) {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.username} (Society Secretary)</h2>
        <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
      </div>
      <p>This is the Society Secretary dashboard. You can add relevant features here.</p>
    </div>
  );
}

export default SocietySecretaryPage;
