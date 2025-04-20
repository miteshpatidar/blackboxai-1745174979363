import React, { useState } from 'react';
import VisitorList from './VisitorList';

function SecurityGuardPage({ user, onLogout }) {
  const [visitors, setVisitors] = useState([
    { id: 1, name: 'Alice Johnson', date: '2024-06-02' },
    { id: 2, name: 'Bob Brown', date: '2024-06-12' },
  ]);

  const [notifications, setNotifications] = useState([]);
  const [visitorToNotify, setVisitorToNotify] = useState('');

  const addVisitor = (visitor) => {
    setVisitors([...visitors, visitor]);
  };

  const removeVisitor = (id) => {
    setVisitors(visitors.filter(v => v.id !== id));
  };

  const sendNotification = () => {
    if (!visitorToNotify) return;
    setNotifications([...notifications, { id: Date.now(), message: `Visitor ${visitorToNotify} is at the entry gate.` }]);
    setVisitorToNotify('');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Welcome, {user.username} (Security Guard)</h2>
        <button className="btn btn-secondary" onClick={onLogout}>Logout</button>
      </div>
      <VisitorList visitors={visitors} onAddVisitor={addVisitor} onRemoveVisitor={removeVisitor} />
      <div className="mt-4">
        <h4>Notify Visitor at Entry Gate</h4>
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            className="form-control"
            placeholder="Visitor Name"
            value={visitorToNotify}
            onChange={e => setVisitorToNotify(e.target.value)}
          />
          <button className="btn btn-primary" onClick={sendNotification}>Send Notification</button>
        </div>
        <ul className="list-group">
          {notifications.map(note => (
            <li key={note.id} className="list-group-item">
              {note.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SecurityGuardPage;
