import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar-1/Navbar';
 
export default function CartPage() {
  const navigate = useNavigate();
 
  // Example cart items (replace with your state/store)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product A', price: 499, qty: 1 },
    { id: 2, name: 'Product B', price: 799, qty: 2 },
  ]);
 
  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
 
  const handleQtyChange = (id, qty) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, qty } : item)
    );
  };
 
  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
 
  return (
<div style={styles.page}>
<Navbar />
<div style={styles.topBar}>
<button
          onClick={() => navigate("/")}
          style={styles.backButton}
>
          ← Back to Orders
</button>
<h1 style={styles.title}>Your Cart</h1>
</div>
 
      <div style={styles.layout}>
<div style={styles.left}>
<h2 style={styles.sectionTitle}>Cart Items</h2>
          {cartItems.length === 0 ? (
<div style={styles.empty}>Your cart is empty.</div>
          ) : (
<div style={styles.list}>
              {cartItems.map(item => (
<div key={item.id} style={styles.card}>
<div style={styles.itemInfo}>
<strong>{item.name}</strong>
<span>₹{item.price}</span>
</div>
<div style={styles.itemActions}>
<input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={e => handleQtyChange(item.id, Number(e.target.value))}
                      style={styles.qtyInput}
                    />
<button
                      style={styles.smallBtn}
                      onClick={() => handleRemove(item.id)}
>
                      Remove
</button>
</div>
</div>
              ))}
</div>
          )}
</div>
 
        <div style={styles.right}>
<h2 style={styles.sectionTitle}>Summary</h2>
<div style={styles.summary}>
<div style={styles.summaryRow}>
<span>Subtotal</span>
<span>₹{total}</span>
</div>
<div style={styles.summaryRow}>
<span>Shipping</span>
<span>Free</span>
</div>
<div style={{ ...styles.summaryRow, fontWeight: 700 }}>
<span>Total</span>
<span>₹{total}</span>
</div>
</div>
<div style={styles.footer}>
<button
              style={styles.primary}
              onClick={() => navigate("/address")}
>
              Proceed to Address
</button>
</div>
</div>
</div>
</div>
  );
};
 
const styles = {
  page: {
    padding: '32px',
    fontFamily: 'system-ui, Arial, sans-serif',
    background: '#f9fafb',
    minHeight: '100vh',
  },
  topBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 6,
    marginTop: 24,
    marginBottom: 24,
  },
  backButton: {
    background: 'transparent',
    border: '1px solid #2fbf5d',
    color: '#2fbf5d',
    padding: '8px 14px',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.2s',
  },
  title: {
    color: '#2fbf5d',
    fontSize: '2rem',
    fontWeight: 700,
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '28px',
  },
  left: {
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: 10,
    padding: 20,
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  right: {
    background: '#fff',
    border: '1px solid #eee',
    borderRadius: 10,
    padding: 20,
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  sectionTitle: {
    fontSize: '1.3rem',
    marginBottom: 16,
    fontWeight: 600,
    color: '#333',
  },
  empty: {
    color: '#666',
    background: '#f5f5f5',
    padding: 20,
    borderRadius: 8,
    textAlign: 'center',
  },
  list: { display: 'flex', flexDirection: 'column', gap: 12 },
  card: {
    border: '1px solid #eee',
    borderRadius: 8,
    padding: 12,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#fff',
  },
  itemInfo: { display: 'flex', flexDirection: 'column', gap: 4 },
  itemActions: { display: 'flex', gap: 10, alignItems: 'center' },
  qtyInput: {
    width: 50,
    padding: '6px',
    border: '1px solid #ccc',
    borderRadius: 6,
  },
  smallBtn: {
    padding: '6px 10px',
    borderRadius: 6,
    border: 'none',
    background: '#eee',
    cursor: 'pointer',
    fontSize: 13,
  },
  summary: { display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: 14 },
  footer: { display: 'flex', justifyContent: 'center' },
  primary: {
    background: '#2fbf5d',
    color: '#fff',
    border: 'none',
    padding: '12px 20px',
    borderRadius: 8,
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'background 0.2s',
  },
};
 
