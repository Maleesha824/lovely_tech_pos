import React, { useState } from 'react';
import DataTable from '../components/common/DataTable';
import SearchBar from '../components/common/SearchBar';
import Button from '../components/common/Button';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customerData = [
    { id: 'C001', name: 'Nimal Perera', phone: '0771234567', totalPurchases: 45000, creditBalance: 5000 },
    { id: 'C002', name: 'Kamal Silva', phone: '0719876543', totalPurchases: 12500, creditBalance: 0 },
  ];

  const columns = [
    { header: 'Customer ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'Contact No', accessor: 'phone' },
    { header: 'Total Purchases (Rs)', accessor: 'totalPurchases' },
    { 
      header: 'Credit Balance (Rs)', 
      cell: (row) => <span style={{ color: row.creditBalance > 0 ? '#ff4444' : '#00cc66' }}>{row.creditBalance}</span>
    },
    { header: 'Action', cell: () => <Button variant="secondary" style={{ padding: '5px 10px', fontSize: '12px' }}>View History</Button> }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Customer Management</h1>
        <Button>+ Add New Customer</Button>
      </div>
      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ width: '300px', marginBottom: '20px' }}>
          <SearchBar onSearch={setSearchTerm} placeholder="Search customers..." />
        </div>
        <DataTable columns={columns} data={customerData} />
      </div>
    </div>
  );
};

export default Customers;