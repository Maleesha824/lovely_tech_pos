import React, { useState, useEffect } from 'react';
import SearchBar from '../components/common/SearchBar';
import Button from '../components/common/Button';
import { Trash2, ShoppingCart } from 'lucide-react';
import '../styles/sales.css';

const Sales = () => {
  const [items, setItems] = useState([]); // Database එකෙන් එන Items තබා ගැනීමට
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Cash'); // Cash, Card, Online[cite: 1]

  // Component එක Load වෙද්දී Backend එකෙන් Items ගෙන්වා ගැනීම
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/items');
        if (response.ok) {
          const data = await response.json();
          // Backend එකෙන් එන දත්ත Frontend එකට ගැලපෙන ලෙස සකස් කිරීම
          const formattedItems = data.map(item => ({
            id: item.id, // PostgreSQL UUID එක
            code: item.itemCode,
            description: item.description,
            price: item.masterSalePrice || 0,
            stock: 0 // තොගය ගණනය කිරීම පසුව Inventory මගින් සිදු වේ[cite: 1]
          }));
          setItems(formattedItems);
        } else {
          console.error("Failed to fetch items from backend");
        }
      } catch (error) {
        console.error("Network error while fetching items:", error);
      }
    };

    fetchItems();
  }, []); // හිස් array එක නිසා මේක වැඩ කරන්නේ පිටුව මුලින්ම load වෙද්දී විතරයි

  const filteredItems = items.filter(item => 
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1, discount: 0 }]);
    }
  };

  const removeFromCart = (id) => setCart(cart.filter(c => c.id !== id));

  const updateQty = (id, qty) => setCart(cart.map(c => c.id === id ? { ...c, qty: Number(qty) } : c));

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalDiscount = cart.reduce((sum, item) => sum + Number(item.discount), 0);
  const grandTotal = subtotal - totalDiscount;

  const handleCompleteSale = async () => {
    if (cart.length === 0) return alert("Cart is empty!");

    const saleData = {
      invoiceNo: "INV-" + Date.now(), 
      documentType: "SYSTEM_PRINTED",
      subtotal: subtotal,
      discountTotal: totalDiscount,
      grandTotal: grandTotal,
      status: "COMPLETED",
      
      saleLines: cart.map(item => ({
        item: { id: item.id }, 
        quantity: item.qty,
        actualUnitPrice: item.price,
        discount: item.discount || 0,
        finalTotal: (item.price * item.qty) - (item.discount || 0)
      })),

      payments: [
        {
          paymentMethod: paymentMethod, 
          amount: grandTotal
        }
      ]
    };

    try {
      const response = await fetch('http://localhost:8080/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(saleData)
      });

      if (response.ok) {
        const savedSale = await response.json();
        alert(`Sale Completed Successfully! Invoice: ${savedSale.invoiceNo}`);
        setCart([]); 
      } else {
        alert("Failed to complete sale. Please check backend logs.");
      }
    } catch (error) {
      console.error("Error saving sale:", error);
      alert("Network error! Is the Spring Boot server running?");
    }
  };

  return (
    <div className="sales-container">
      {/* Left Panel - Item Selection */}
      <div className="glass-panel items-panel">
        <h2 style={{marginTop: 0}}>New Sale</h2>
        <SearchBar onSearch={setSearchTerm} />
        
        <div className="items-grid" style={{ marginTop: '20px' }}>
          {filteredItems.length === 0 ? (
             <p style={{ color: 'var(--text-muted)' }}>No items found in the database.</p>
          ) : (
            filteredItems.map(item => (
              <div key={item.id} className="item-card glass-panel" onClick={() => addToCart(item)}>
                <h4>{item.description}</h4>
                <p style={{ color: 'var(--primary-red)', fontWeight: 'bold' }}>Rs. {item.price}</p>
                <p style={{ color: item.stock < 0 ? 'yellow' : 'var(--text-muted)', fontSize: '12px' }}>
                  Stock: {item.stock} {item.stock < 0 && '(Warning)'}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Panel - Cart & Checkout */}
      <div className="glass-panel cart-panel">
        <h2 style={{marginTop: 0, display: 'flex', alignItems: 'center', gap: '10px'}}>
          <ShoppingCart /> Current Cart
        </h2>
        
        <div className="cart-items">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <div style={{ flex: 1 }}>
                <h4>{item.description}</h4>
                <p>Rs. {item.price}</p>
              </div>
              <input 
                type="number" value={item.qty} min="1"
                onChange={(e) => updateQty(item.id, e.target.value)}
                style={{ width: '50px', background: 'transparent', color: 'white', border: '1px solid gray' }}
              />
              <Trash2 color="#ff4444" style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={() => removeFromCart(item.id)} />
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <hr style={{ borderColor: 'var(--glass-border)' }} />
          <div className="summary-row"><span>Subtotal:</span> <span>Rs. {subtotal}</span></div>
          <div className="summary-row"><span>Discount:</span> <span>Rs. {totalDiscount}</span></div>
          <div className="summary-row total"><span>Grand Total:</span> <span>Rs. {grandTotal}</span></div>
          
          <div style={{ marginTop: '20px' }}>
            <label style={{ color: 'var(--text-muted)' }}>Payment Method:</label>
            <select 
              value={paymentMethod} 
              onChange={(e) => setPaymentMethod(e.target.value)}
              style={{ width: '100%', padding: '10px', marginTop: '5px', background: '#222', color: 'white', border: '1px solid gray' }}
            >
              <option value="Cash">Cash</option>
              <option value="Card">Card</option>
              <option value="Online">Online Transfer</option>
            </select>
          </div>

          <Button onClick={handleCompleteSale} style={{ width: '100%', marginTop: '20px', fontSize: '18px' }}>
            Complete Sale
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sales;