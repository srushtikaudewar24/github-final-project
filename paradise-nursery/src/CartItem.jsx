import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectCartCount } from './CartSlice';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const totalQuantity = useSelector(selectCartCount);
  const calculateTotalAmount = () => cart.reduce(
    (total, item) => total + Number(item.price) * item.quantity, 0
  );
  const calculateTotalCost = item => Number(item.price) * item.quantity;
  const handleIncrement = item => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  const handleDecrement = item => {
    if (item.quantity <= 1) dispatch(removeItem(item.id));
    else dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
  };
  const handleRemove = item => dispatch(removeItem(item.id));
  const handleCheckout = () => window.alert('Coming Soon! Checkout will be available soon.');
  const handleContinueShopping = e => {
    if (e) e.preventDefault();
    navigate('plants');
  };
  const money = amount => `$${Number(amount).toFixed(2)}`;

  return (
    <main className="content cart-page">
      <div className="page-intro"><p className="eyebrow">Your greenhouse</p><h1>Shopping Cart</h1><p>{totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} in your cart</p></div>
      {!cart.length ? (
        <section className="empty-cart"><h2>Your cart is empty 🌱</h2><p>Find a plant to brighten up your home.</p><button type="button" className="get-started-button primary-button" onClick={handleContinueShopping}>Continue Shopping</button></section>
      ) : (
        <div className="cart-layout cart-container">
          <div className="cart-lines">
            {cart.map(item => (
              <article className="cart-line" key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="cart-description">
                  <h2>{item.name}</h2>
                  <p>Unit price: {money(item.price)}</p>
                  <p className="line-total">Total cost: {money(calculateTotalCost(item))}</p>
                  <div className="quantity-controls">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => handleDecrement(item)}>−</button>
                    <span aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <button type="button" className="delete-button" onClick={() => handleRemove(item)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row"><span>Total items</span><strong>{totalQuantity}</strong></div>
            <div className="summary-row grand-total"><span>Total cart amount</span><strong>{money(calculateTotalAmount())}</strong></div>
            <button type="button" className="primary-button full" onClick={handleCheckout}>Checkout — Coming Soon</button>
            <button type="button" className="get-started-button secondary-button full" onClick={handleContinueShopping}>Continue Shopping</button>
          </aside>
        </div>
      )}
    </main>
  );
}
