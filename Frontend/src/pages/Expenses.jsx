import React from 'react';
import DataTable from '../components/common/DataTable';
import Button from '../components/common/Button';

const Expenses = () => {
  const expenseData = [
    { id: 1, category: 'Tea/Food', amount: 500, date: '2026-03-23', user: 'Cashier1', status: 'Pending Approval' },
    { id: 2, category: 'Transport', amount: 1500, date: '2026-03-22', user: 'Cashier1', status: 'Approved' },
  ];

  const columns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Category', accessor: 'category' }, // Electricity, Rent, Internet, etc.[cite: 1]
    { header: 'Amount (Rs)', accessor: 'amount' },
    { header: 'Entered By', accessor: 'user' },
    { 
      header: 'Status', 
      cell: (row) => (
        <span style={{ color: row.status === 'Approved' ? '#00cc66' : 'yellow' }}>
          {row.status} {/* Pending approvals excluded from final Cash In Hands[cite: 1] */}
        </span>
      )
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Expenses & Other Income</h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary">+ Add Income</Button>
          <Button>+ Add Expense</Button>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '20px' }}>
        <DataTable columns={columns} data={expenseData} />
      </div>
    </div>
  );
};

export default Expenses;