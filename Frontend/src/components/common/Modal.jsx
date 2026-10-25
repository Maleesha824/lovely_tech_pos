import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      zIndex: 1000, backdropFilter: 'blur(5px)'
    }}>
      <div className="glass-panel" style={{
        width: '500px', maxWidth: '90%', maxHeight: '90vh',
        overflowY: 'auto', padding: '20px',
        border: '1px solid var(--primary-red)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: 'white' }}>{title}</h2>
          <X color="var(--text-muted)" style={{ cursor: 'pointer' }} onClick={onClose} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;