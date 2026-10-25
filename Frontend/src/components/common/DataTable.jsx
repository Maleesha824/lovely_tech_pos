import React from 'react';

const DataTable = ({ columns, data }) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ 
        width: '100%', 
        borderCollapse: 'collapse',
        color: 'var(--text-main)' 
      }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--primary-red)' }}>
            {columns.map((col, index) => (
              <th key={index} style={{ padding: '12px', textAlign: 'left', color: 'var(--text-muted)' }}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ borderBottom: '1px solid rgba(255,0,0,0.2)' }}>
              {columns.map((col, colIndex) => (
                <td key={colIndex} style={{ padding: '12px' }}>
                  {col.cell ? col.cell(row) : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center', padding: '20px', color: 'var(--text-muted)' }}>
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;