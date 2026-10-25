import React, { useState } from 'react';
import DataTable from '../components/common/DataTable';
import Button from '../components/common/Button';

const Purchases = () => {
  const [purchaseList, setPurchaseList] = useState([
    { id: 1, item: 'Samsung S21 Battery', qty: 10, supplier: 'Tech Suppliers Ltd', date: '2026-03-23' }
  ]);

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Item', accessor: 'item' },
    { header: 'Supplier (Optional)', accessor: 'supplier' },
    { header: 'Quantity', accessor: 'qty' },
    { 
      header: 'Cost Status', 
      cell: () => <span style={{ color: 'yellow' }}>Pending Admin Cost</span> // Cashier enters without cost[cite: 1]
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Purchases (GRN)</h1>
        <Button>+ New Purchase</Button>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          * Cashier entries instantly update stock. Cost assignment is Admin-only[cite: 1].
        </p>
        <DataTable columns={columns} data={purchaseList} />
      </div>
    </div>
  );
};

export default Purchases;