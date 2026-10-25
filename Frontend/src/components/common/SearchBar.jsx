import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch, placeholder = "Search by Code, Name, Barcode..." }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Search size={20} style={{ position: 'absolute', left: '15px', top: '12px', color: 'var(--text-muted)' }} />
      <input 
        type="text" 
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          width: '100%', padding: '12px 20px 12px 45px',
          backgroundColor: 'rgba(0,0,0,0.5)', color: 'white',
          border: '1px solid var(--glass-border)', borderRadius: '8px',
          outline: 'none', boxSizing: 'border-box'
        }}
      />
    </div>
  );
};

export default SearchBar;