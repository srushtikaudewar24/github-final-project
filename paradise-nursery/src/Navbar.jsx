import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice';

export default function Navbar({ page, navigate }) {
  const count = useSelector(selectCartCount);
  return (
    <header className="site-header">
      <button type="button" className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home">🌿 <span>Paradise Nursery</span></button>
      <nav aria-label="Main navigation">
        <button className={page === 'home' ? 'nav-active' : ''} onClick={() => navigate('home')}>Home</button>
        <button className={page === 'plants' ? 'nav-active' : ''} onClick={() => navigate('plants')}>Plants</button>
        <button className={page === 'cart' ? 'nav-active cart-nav' : 'cart-nav'} onClick={() => navigate('cart')} aria-label={`Cart with ${count} items`}>🛒 Cart <span className="cart-count" aria-live="polite">{count}</span></button>
      </nav>
    </header>
  );
}
