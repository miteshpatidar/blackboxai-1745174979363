import React, { useState } from 'react';

function VisitorList({ visitors, onAddVisitor, onRemoveVisitor }) {
  const [newVisitorName, setNewVisitorName] = useState('');
  const [newVisitorDate, setNewVisitorDate] = useState('');

  const handleAdd = () => {
    if (!newVisitorName || !newVisitorDate) return;
    onAddVisitor({ id: Date.now(), name: newVisitorName, date: newVisitorDate });
    setNewVisitorName('');
    setNewVisitorDate('');
  };

  return (
    <div>
      <h4>Visitors</h4>
      <ul className="list-group mb-3">
        {visitors.map(visitor => (
          <li key={visitor.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{visitor.name}</strong> - {visitor.date}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => onRemoveVisitor(visitor.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Visitor Name"
          className="form-control mb-2"
          value={newVisitorName}
          onChange={e => setNewVisitorName(e.target.value)}
        />
        <input
          type="date"
          className="form-control mb-2"
          value={newVisitorDate}
          onChange={e => setNewVisitorDate(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add Visitor</button>
      </div>
    </div>
  );
}

export default VisitorList;
