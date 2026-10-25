import React, { useState } from 'react';
import DataTable from '../components/common/DataTable';
import SearchBar from '../components/common/SearchBar';
import Button from '../components/common/Button';

const Warranty = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock Warranty Data based on PDF requirements
  const warrantyData = [
    { invoice: 'INV-00125', item: 'iPhone 13 Pro Display', imei: 'N/A', type: 'MONTHS', period: '6', status: 'ACTIVE', saleDate: '2026-01-10' },
    { invoice: 'INV-00199', item: 'Samsung S21', imei: '358941258741025', type: 'DAYS', period: '7', status: 'EXPIRED', saleDate: '2025-12-05' },
    { invoice: 'INV-00205', item: 'Type-C Charger', imei: 'N/A', type: 'CHECKING ONLY', period: 'N/A', status: 'CLOSED', saleDate: '2026-03-20' }
  ];

  const columns = [
    { header: 'Invoice No', accessor: 'invoice' },
    { header: 'Item', accessor: 'item' },
    { header: 'IMEI / Serial', accessor: 'imei' },
    { header: 'Warranty Type', accessor: 'type' },
    { header: 'Sale Date', accessor: 'saleDate' },
    { 
      header: 'Status', 
      cell: (row) => (
        <span style={{ color: row.status === 'ACTIVE' ? '#00cc66' : 'var(--text-muted)' }}>
          {row.status}
        </span>
      )
    },
    { 
      header: 'Action', 
      cell: () => <Button variant="primary" style={{ padding: '5px 10px', fontSize: '12px' }}>Make Claim</Button> 
    }
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Warranty Management</h1>
      
      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <SearchBar onSearch={setSearchTerm} placeholder="Search by Invoice, IMEI, Serial or Customer..." />
          </div>
          <Button variant="secondary">Manual Registration</Button> {/* For legacy/external cases exception-only */}
        </div>
        
        <DataTable columns={columns} data={warrantyData} />
      </div>
    </div>
  );
};

export default Warranty;