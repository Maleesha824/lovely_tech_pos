import React, { useState } from 'react';
import DataTable from '../components/common/DataTable';
import SearchBar from '../components/common/SearchBar';
import { mockItems } from '../data/mockData';

const Stock = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStock = mockItems.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { header: 'Item Code', accessor: 'code' },
    { header: 'Description', accessor: 'description' },
    { header: 'Category', accessor: 'category' },
    { header: 'Selling Price', cell: (row) => `Rs. ${row.price}` },
    { 
      header: 'Current Stock', 
      cell: (row) => (
        <span style={{ 
          color: row.stock < 0 ? '#ff4444' : (row.stock < 5 ? 'yellow' : 'white'),
          fontWeight: 'bold'
        }}>
          {row.stock} {row.stock < 0 && ' (Negative - Needs Adjustment)'} {/* Negative stock warning[cite: 1] */}
        </span>
      )
    }
  ];

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Inventory & Stock</h1>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ width: '400px' }}>
            <SearchBar onSearch={setSearchTerm} placeholder="Search items in stock..." />
          </div>
          {/* Stock adjustments are Admin only[cite: 1] */}
          <button className="btn-secondary" style={{ padding: '10px 20px' }}>Adjust Stock (Admin)</button>
        </div>

        <DataTable columns={columns} data={filteredStock} />
      </div>
    </div>
  );
};

export default Stock;