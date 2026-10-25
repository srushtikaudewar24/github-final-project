import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartCount } from './CartSlice';

// Shared navigation displayed on Home, Plants and Shopping Cart pages.
export default function Navbar({ page, navigate }) {
  const cartCount = useSelector(selectCartCount);
  const handleHomeClick = () => navigate('home');
  const handlePlantsClick = () => navigate('plants');
  const handleCartClick = () => navigate('cart');
  return (
    <header className="site-header">
      <button type="button" className="brand" onClick={handleHomeClick}>🌿 <span>Paradise Nursery</span></button>
      <nav aria-label="Main navigation">
        <button type="button" className={page === 'home' ? 'nav-active' : ''} onClick={handleHomeClick}>Home</button>
        <button type="button" className={page === 'plants' ? 'nav-active' : ''} onClick={handlePlantsClick}>Plants</button>
        <button type="button" className={page === 'cart' ? 'nav-active cart-nav' : 'cart-nav'} onClick={handleCartClick} aria-label={`Cart with ${cartCount} items`}>🛒 Cart <span className="cart-count" aria-live="polite">{cartCount}</span></button>
      </nav>
    </header>
  );
}
