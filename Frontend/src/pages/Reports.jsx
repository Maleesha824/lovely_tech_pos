import React from 'react';
import Button from '../components/common/Button';

const Reports = () => {
  const reportTypes = ['Daily Sales', 'Monthly Profit', 'Stock Movement', 'Repairs Income', 'Expenses'];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>System Reports</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
        {reportTypes.map(type => (
          <div key={type} className="glass-panel" style={{ padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
            <h3 style={{ margin: 0, color: 'var(--text-main)' }}>{type}</h3>
          </div>
        ))}
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0 }}>Report Preview</h2>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="secondary">Export PDF</Button>
            <Button variant="secondary">Export Excel</Button>
          </div>
        </div>
        <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px dashed var(--glass-border)' }}>
          <span style={{ color: 'var(--text-muted)' }}>Select a report type to generate preview.</span>
        </div>
      </div>
    </div>
  );
};

export default Reports;