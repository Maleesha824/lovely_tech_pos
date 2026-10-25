import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // දැනට කෙලින්ම Dashboard එකට යවමු
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <div className="glass-panel" style={{ padding: '40px', width: '400px', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary-red)', marginBottom: '10px' }}>LOVELY TECH</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>POS System Login</p>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input 
            type="text" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: '12px', borderRadius: '6px', border: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.5)', color: 'white' }}
          />
          <Button type="submit" style={{ padding: '12px', fontSize: '16px' }}>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;