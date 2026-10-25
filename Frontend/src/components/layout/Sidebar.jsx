import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, Wrench, Shield, 
  Package, Truck, Users, Banknote, FileText, Settings, Wallet
} from 'lucide-react';

const Sidebar = () => {
  // PDF eke thiyena requirements walata anuwa tabs
  const menuItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Sales / POS', path: '/sales', icon: <ShoppingCart size={20} /> },
    { name: 'Repairs', path: '/repairs', icon: <Wrench size={20} /> },
    { name: 'Warranty', path: '/warranty', icon: <Shield size={20} /> },
    { name: 'Stock', path: '/stock', icon: <Package size={20} /> },
    { name: 'Purchases', path: '/purchases', icon: <Truck size={20} /> },
    { name: 'Customers', path: '/customers', icon: <Users size={20} /> },
    { name: 'Cash / Shift', path: '/cash', icon: <Banknote size={20} /> },
    { name: 'Expenses', path: '/expenses', icon: <Wallet size={20} /> },
    { name: 'Reports', path: '/reports', icon: <FileText size={20} /> },
    { name: 'Admin', path: '/admin', icon: <Settings size={20} /> },
  ];

  return (
    <div className="glass-panel" style={{ 
      width: '250px', 
      height: '100vh', 
      padding: '20px',
      overflowY: 'auto',
      borderRight: '1px solid var(--glass-border)'
    }}>
      <h2 style={{ color: 'var(--primary-red)', textAlign: 'center', fontWeight: 'bold' }}>
        LOVELY TECH
      </h2>
      <hr style={{ borderColor: 'var(--glass-border)', marginBottom: '20px' }} />
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {menuItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path}
            style={({ isActive }) => ({
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              padding: '12px 15px', 
              textDecoration: 'none',
              color: isActive ? 'white' : 'var(--text-muted)',
              backgroundColor: isActive ? 'var(--primary-red)' : 'transparent',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;