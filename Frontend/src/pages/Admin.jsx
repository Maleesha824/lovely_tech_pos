import React from 'react';
import Button from '../components/common/Button';

const Admin = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Admin Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        
        {/* Pending Approvals */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h2 style={{ marginTop: 0, color: 'var(--primary-red)' }}>Pending Approvals</h2>
          <p style={{ color: 'var(--text-muted)' }}>No pending expenses, discounts, or stock adjustments.</p>
        </div>

        {/* Backup & Restore */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h2 style={{ marginTop: 0, color: 'var(--primary-red)' }}>Database Backup & Restore</h2>
          <p style={{ color: 'var(--text-muted)' }}>Google Drive Sync: <span style={{ color: '#00cc66' }}>Connected</span></p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <Button variant="primary">Create Backup</Button>
            <Button variant="secondary" style={{ borderColor: 'yellow', color: 'yellow' }}>Restore Database</Button>
          </div>
        </div>

        {/* User Management */}
        <div className="glass-panel" style={{ padding: '20px', gridColumn: '1 / -1' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2 style={{ margin: 0, color: 'var(--primary-red)' }}>User Management</h2>
            <Button variant="secondary">+ Add New User</Button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--primary-red)', textAlign: 'left', color: 'var(--text-muted)' }}>
                <th style={{ padding: '10px' }}>Username</th>
                <th style={{ padding: '10px' }}>Role</th>
                <th style={{ padding: '10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px' }}>admin_user</td>
                <td style={{ padding: '10px' }}>Admin</td>
                <td style={{ padding: '10px', color: '#00cc66' }}>Active</td>
              </tr>
              <tr>
                <td style={{ padding: '10px' }}>cashier_1</td>
                <td style={{ padding: '10px' }}>Cashier</td>
                <td style={{ padding: '10px', color: '#00cc66' }}>Active</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Admin;