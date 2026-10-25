import React from 'react';

const Button = ({ children, onClick, variant = 'primary', style }) => {
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const variants = {
    primary: { backgroundColor: 'var(--primary-red)', color: 'white' },
    secondary: { backgroundColor: '#333', color: 'white', border: '1px solid var(--text-muted)' },
    danger: { backgroundColor: '#ff4444', color: 'white' },
    success: { backgroundColor: '#00cc66', color: 'white' }
  };

  return (
    <button 
      onClick={onClick} 
      style={{ ...baseStyle, ...variants[variant], ...style }}
      className={`btn-${variant}`}
    >
      {children}
    </button>
  );
};

export default Button;