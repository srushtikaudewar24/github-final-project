import React, { useState } from 'react';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = next => {
    setPage(next);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleGetStarted = () => navigate('plants');
  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      {page === 'home' && (
        <main>
          <section className="background-image hero" aria-label="Paradise Nursery landing page">
            <div className="hero-overlay">
              <p className="eyebrow">Your indoor oasis starts here</p>
              <h1>Welcome to Paradise Nursery</h1>
              <p>Beautiful houseplants. Happier spaces. Discover your next green companion.</p>
              <button type="button" className="get-started-button primary-button" onClick={handleGetStarted}>Get Started</button>
            </div>
          </section>
          <AboutUs />
        </main>
      )}
      {page === 'plants' && <ProductList navigate={navigate} />}
      {page === 'cart' && <CartItem navigate={navigate} />}
      <footer>© Paradise Nursery · Grow something wonderful</footer>
    </div>
  );
}
