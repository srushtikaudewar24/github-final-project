import React, { useState } from 'react';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import ProductList from './ProductList';
import CartItem from './CartItem';

export default function App() {
  const [page, setPage] = useState('home');
  const navigate = next => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return (
    <div className="app-shell">
      <Navbar page={page} navigate={navigate} />
      {page === 'home' && (
        <main>
          <section className="hero" aria-label="Paradise Nursery landing page">
            <div className="hero-overlay">
              <p className="eyebrow">Your indoor oasis starts here</p>
              <h1>Paradise Nursery</h1>
              <p>Beautiful houseplants. Happier spaces. Discover your next favorite green companion.</p>
              <button className="primary-button" onClick={() => navigate('plants')}>Get Started</button>
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
