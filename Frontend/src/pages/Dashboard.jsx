import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ color: 'var(--text-main)', marginBottom: '30px' }}>Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        {/* Stat Card 1 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h3 style={{ color: 'var(--text-muted)', margin: 0 }}>Today's Sales</h3>
          <h2 style={{ color: 'var(--primary-red)', margin: '10px 0' }}>Rs. 45,000</h2>
        </div>

        {/* Stat Card 2 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h3 style={{ color: 'var(--text-muted)', margin: 0 }}>Pending Repairs</h3>
          <h2 style={{ color: 'var(--primary-red)', margin: '10px 0' }}>12 Devices</h2>
        </div>

        {/* Stat Card 3 */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h3 style={{ color: 'var(--text-muted)', margin: 0 }}>Cash In Hand</h3>
          <h2 style={{ color: 'var(--primary-red)', margin: '10px 0' }}>Rs. 15,500</h2>
        </div>

      </div>

      <div className="glass-panel" style={{ marginTop: '40px', padding: '20px', height: '300px' }}>
        <h3>Recent Transactions</h3>
        <p style={{ color: 'var(--text-muted)' }}>Transaction data table illi barutte...</p>
        <button className="btn-primary" style={{ marginTop: '20px' }}>New Sale</button>
      </div>
    </div>
  );
};

export default Dashboard;