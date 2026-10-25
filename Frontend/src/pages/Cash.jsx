import React from 'react';
import Button from '../components/common/Button';

const Cash = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Cash / Day Start & End</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Denominations Section */}
        <div className="glass-panel" style={{ padding: '20px' }}>
          <h2 style={{ marginTop: 0, color: 'var(--primary-red)' }}>Day End - Cash Count</h2>
          {['5000', '2000', '1000', '500', '100', '50', '20'].map(note => (
            <div key={note} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
              <span>Rs. {note} Notes:</span>
              <input type="number" placeholder="Count" style={{ width: '100px', padding: '5px', background: '#222', color: 'white', border: '1px solid gray' }} />
            </div>
          ))}
          <hr style={{ borderColor: 'var(--glass-border)', margin: '20px 0' }} />
          <h3 style={{ margin: 0 }}>Total Cash: Rs. 0.00</h3>
        </div>

        {/* Reloads & Actions Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <h2 style={{ marginTop: 0, color: 'var(--primary-red)' }}>Daily Reloads</h2>
            {['Dialog', 'Mobitel', 'Airtel', 'Hutch'].map(network => (
              <div key={network} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>{network} Total:</span>
                <input type="number" placeholder="Amount" style={{ width: '120px', padding: '5px', background: '#222', color: 'white', border: '1px solid gray' }} />
              </div>
            ))}
          </div>

          <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Button variant="success" style={{ width: '100%' }}>Submit Day End</Button>
            <Button variant="secondary" style={{ width: '100%' }}>Cashier Shift End</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cash;