import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import PageContainer from './components/layout/PageContainer';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Repairs from './pages/Repairs';
import Warranty from './pages/Warranty';
import Stock from './pages/Stock';
import Purchases from './pages/Purchases';
import Customers from './pages/Customers';
import Cash from './pages/Cash';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import Admin from './pages/Admin';

// Global Styles
import './styles/global.css';

// Main Layout Component (Sidebar + Page Content)
const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      <Sidebar />
      <div style={{ flex: 1, height: '100vh', overflow: 'hidden' }}>
        <PageContainer>
          {children}
        </PageContainer>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route (Without Sidebar and Header) */}
        <Route path="/login" element={<Login />} />

        {/* Main Application Routes (Wrapped with Sidebar and Header) */}
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/sales" element={<MainLayout><Sales /></MainLayout>} />
        <Route path="/repairs" element={<MainLayout><Repairs /></MainLayout>} />
        <Route path="/warranty" element={<MainLayout><Warranty /></MainLayout>} />
        <Route path="/stock" element={<MainLayout><Stock /></MainLayout>} />
        <Route path="/purchases" element={<MainLayout><Purchases /></MainLayout>} />
        <Route path="/customers" element={<MainLayout><Customers /></MainLayout>} />
        <Route path="/cash" element={<MainLayout><Cash /></MainLayout>} />
        <Route path="/expenses" element={<MainLayout><Expenses /></MainLayout>} />
        <Route path="/reports" element={<MainLayout><Reports /></MainLayout>} />
        <Route path="/admin" element={<MainLayout><Admin /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;