import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import SocietyMemberPage from './components/SocietyMemberPage';
import SecurityGuardPage from './components/SecurityGuardPage';
import SocietySecretaryPage from './components/SocietySecretaryPage';

function App() {
  const [user, setUser] = useState(null); // { username, role }

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/member" element={user.role === 'member' ? <SocietyMemberPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/guard" element={user.role === 'guard' ? <SecurityGuardPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="/secretary" element={user.role === 'secretary' ? <SocietySecretaryPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to={user.role === 'member' ? "/member" : user.role === 'guard' ? "/guard" : "/secretary"} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
