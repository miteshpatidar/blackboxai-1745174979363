import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const roles = ['member', 'guard', 'secretary'];

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('member');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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
    if (!password) {
      setError('Password is required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    // For demo, just navigate to login after "registration"
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">WISITOR Register</h2>
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
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" id="confirmPassword" className="form-control" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">Register</button>
        <p className="mt-3">Already have an account? <Link to="/login">Login here</Link></p>
      </form>
    </div>
  );
}

export default RegisterPage;
