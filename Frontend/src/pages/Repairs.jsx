import React, { useState, useEffect } from 'react';
import DataTable from '../components/common/DataTable';
import Button from '../components/common/Button';
import SearchBar from '../components/common/SearchBar';
import Modal from '../components/common/Modal';
import { Plus } from 'lucide-react';

const Repairs = () => {
  const [repairs, setRepairs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Create Modal State
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [createFormData, setCreateFormData] = useState({
    customerName: '', contactNo: '', deviceBrand: '', model: '', reportedFault: '', estimateAmount: ''
  });

  // Edit Modal State
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState(null); // තෝරාගත් Repair එක මෙහි ගබඩා වේ

  // දත්ත ගෙන්වා ගැනීම
  const fetchRepairs = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/repairs');
      if (response.ok) {
        setRepairs(await response.json());
      }
    } catch (error) {
      console.error("Error fetching repairs:", error);
    }
  };

  useEffect(() => { fetchRepairs(); }, []);

  // Create Form Changes
  const handleCreateInputChange = (e) => {
    setCreateFormData({ ...createFormData, [e.target.name]: e.target.value });
  };

  // Edit Form Changes
  const handleEditInputChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  // අලුත් එකක් සේව් කිරීම
  const handleCreateRepair = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/repairs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createFormData)
      });
      if (response.ok) {
        alert("Repair Job Created!");
        setIsCreateModalOpen(false);
        setCreateFormData({ customerName: '', contactNo: '', deviceBrand: '', model: '', reportedFault: '', estimateAmount: '' });
        fetchRepairs();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // පවතින එකක් යාවත්කාලීන කිරීම (Update)
  const handleUpdateRepair = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/repairs/${editFormData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData)
      });
      if (response.ok) {
        alert("Repair Job Updated Successfully!");
        setIsEditModalOpen(false);
        fetchRepairs();
      } else {
        alert("Update Failed!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  // බොත්තම එබූ විට Edit Modal එක විවෘත කිරීම
  const openEditModal = (repairRow) => {
    setEditFormData(repairRow); // ඔබපු row එකේ දත්ත Modal එකට දානවා
    setIsEditModalOpen(true);
  };

  const filteredRepairs = repairs.filter(repair => 
    (repair.customerName && repair.customerName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (repair.repNo && repair.repNo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const columns = [
    { header: 'Repair ID', accessor: 'repNo' },
    { header: 'Customer', accessor: 'customerName' },
    { header: 'Brand/Model', cell: (row) => `${row.deviceBrand || ''} ${row.model || ''}` },
    { header: 'Estimate (Rs)', accessor: 'estimateAmount' },
    { 
      header: 'Status', 
      cell: (row) => {
        let color = 'white';
        if (row.status === 'READY' || row.status === 'DELIVERED') color = '#00cc66';
        if (row.status === 'WAITING FOR PART' || row.status === 'CHECKING') color = 'yellow';
        if (row.status === 'CANCELLED') color = '#ff4444';
        return <span style={{ color: color, fontWeight: 'bold' }}>{row.status}</span>;
      }
    },
    { 
      header: 'Action', 
      // මෙතන තමයි අලුත් onClick එක දැම්මේ
      cell: (row) => (
        <Button onClick={() => openEditModal(row)} variant="secondary" style={{ padding: '5px 10px', fontSize: '12px' }}>
          View / Edit
        </Button>
      ) 
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Repair Management</h1>
        <Button onClick={() => setIsCreateModalOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Plus size={18} /> New Repair Job
        </Button>
      </div>

      <div className="glass-panel" style={{ padding: '20px', marginBottom: '20px' }}>
        <div style={{ width: '300px', marginBottom: '20px' }}>
          <SearchBar onSearch={setSearchTerm} placeholder="Search by Job No, Customer..." />
        </div>
        <DataTable columns={columns} data={filteredRepairs} />
      </div>

      {/* Create New Repair Modal */}
      <Modal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} title="Create New Repair Job">
        <form onSubmit={handleCreateRepair} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" name="customerName" placeholder="Customer Name" value={createFormData.customerName} onChange={handleCreateInputChange} required style={inputStyle} />
          <input type="text" name="contactNo" placeholder="Contact No" value={createFormData.contactNo} onChange={handleCreateInputChange} required style={inputStyle} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <input type="text" name="deviceBrand" placeholder="Brand" value={createFormData.deviceBrand} onChange={handleCreateInputChange} required style={{...inputStyle, flex: 1}} />
            <input type="text" name="model" placeholder="Model" value={createFormData.model} onChange={handleCreateInputChange} required style={{...inputStyle, flex: 1}} />
          </div>
          <textarea name="reportedFault" placeholder="Reported Fault" value={createFormData.reportedFault} onChange={handleCreateInputChange} required rows="3" style={inputStyle} />
          <input type="number" name="estimateAmount" placeholder="Estimated Amount (Rs)" value={createFormData.estimateAmount} onChange={handleCreateInputChange} required style={inputStyle} />
          <Button type="submit" variant="primary" style={{ marginTop: '10px' }}>Save Repair Job</Button>
        </form>
      </Modal>

      {/* Edit / View Repair Modal */}
      {editFormData && (
        <Modal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} title={`View / Edit: ${editFormData.repNo}`}>
          <form onSubmit={handleUpdateRepair} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            {/* Status සහ Final Amount වෙනස් කිරීම */}
            <div style={{ display: 'flex', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', color: '#aaa' }}>Current Status</label>
                <select name="status" value={editFormData.status} onChange={handleEditInputChange} style={inputStyle}>
                  <option value="RECEIVED">RECEIVED</option>
                  <option value="CHECKING">CHECKING</option>
                  <option value="WAITING FOR PART">WAITING FOR PART</option>
                  <option value="READY">READY</option>
                  <option value="DELIVERED">DELIVERED</option>
                  <option value="CANCELLED">CANCELLED</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', color: '#aaa' }}>Final Amount (Rs)</label>
                <input type="number" name="finalAmount" value={editFormData.finalAmount || ''} onChange={handleEditInputChange} placeholder="Final Bill" style={inputStyle} />
              </div>
            </div>

            {/* අනිත් විස්තර බැලීමට සහ අවශ්‍ය නම් වෙනස් කිරීමට */}
            <input type="text" name="customerName" value={editFormData.customerName} onChange={handleEditInputChange} style={inputStyle} />
            <input type="text" name="contactNo" value={editFormData.contactNo} onChange={handleEditInputChange} style={inputStyle} />
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" name="deviceBrand" value={editFormData.deviceBrand} onChange={handleEditInputChange} style={{...inputStyle, flex: 1}} />
              <input type="text" name="model" value={editFormData.model} onChange={handleEditInputChange} style={{...inputStyle, flex: 1}} />
            </div>
            <textarea name="reportedFault" value={editFormData.reportedFault} onChange={handleEditInputChange} rows="2" style={inputStyle} />
            
            <Button type="submit" variant="primary" style={{ marginTop: '10px', background: 'var(--primary-blue)' }}>Update Repair Job</Button>
          </form>
        </Modal>
      )}
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid var(--glass-border)',
  background: 'rgba(0,0,0,0.5)',
  color: 'white',
  width: '100%',
  boxSizing: 'border-box'
};

export default Repairs;