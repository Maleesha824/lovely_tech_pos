import React from 'react';
import { User, LogOut } from 'lucide-react';

const Header = () => {
  return (
    <div className="glass-panel" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '15px 20px',
      marginBottom: '20px'
    }}>
      <div>
        <h3 style={{ margin: 0, color: 'var(--text-main)' }}>Business Day: <span style={{color: '#00cc66'}}>Started</span></h3>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <User size={20} color="var(--primary-red)" />
          <span>Admin User</span> {/* Cashier ho Admin */}
        </div>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px' }}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </div>
  );
};

export default Header;