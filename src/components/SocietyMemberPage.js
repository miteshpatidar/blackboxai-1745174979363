import React, { useState } from 'react';
import VisitorList from './VisitorList';

function SocietyMemberPage({ user, onLogout }) {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'John Doe', date: '2024-06-01' },
    { id: 2, name: 'Jane Smith', date: '2024-06-10' },
  ]);

  const addVisitor = (visitor) => {
    setVisitors([...visitors, visitor]);
  };

  const removeVisitor = (id) => {
    setVisitors(visitors.filter(v => v.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.username} (Member)</h2>
        <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
      </div>
      <VisitorList visitors={visitors} onAddVisitor={addVisitor} onRemoveVisitor={removeVisitor} />
    </div>
  );
}

export default SocietyMemberPage;
