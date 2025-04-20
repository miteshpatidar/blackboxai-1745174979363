import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const roles = ['member', 'guard', 'secretary'];

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('member');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setError('Username is required');
      return;
    }
    if (!roles.includes(role)) {
      setError('Invalid role selected');
      return;
    }
    setError('');
    onLogin({ username, role });
    navigate(role === 'member' ? '/member' : role === 'guard' ? '/guard' : '/secretary');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">WISITOR Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" id="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">Role</label>
          <select id="role" className="form-select" value={role} onChange={e => setRole(e.target.value)}>
            {roles.map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
          </select>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Login</button>
        <p className="mt-3">Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}

export default LoginPage;
