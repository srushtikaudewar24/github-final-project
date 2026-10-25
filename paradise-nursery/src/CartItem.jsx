import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems, selectCartCount, selectCartTotal } from './CartSlice';

export default function CartItem({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const total = useSelector(selectCartTotal);
  const money = n => `$${n.toFixed(2)}`;
  return (
    <main className="content cart-page">
      <div className="page-intro"><p className="eyebrow">Your greenhouse</p><h1>Shopping Cart</h1><p>{count} {count === 1 ? 'plant' : 'plants'} in your cart</p></div>
      {items.length === 0 ? (
        <section className="empty-cart"><h2>Your cart is empty 🌱</h2><p>A little greenery goes a long way.</p><button className="primary-button" onClick={() => navigate('plants')}>Continue Shopping</button></section>
      ) : (
        <div className="cart-layout">
          <div className="cart-lines">
            {items.map(item => (
              <article className="cart-line" key={item.id}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <div className="cart-description"><h2>{item.name}</h2><p>Unit price: {money(item.price)}</p><p className="line-total">Item total: {money(item.price * item.quantity)}</p><div className="quantity-controls"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button><span aria-label={`Quantity: ${item.quantity}`}>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button></div><button className="delete-button" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div>
              </article>
            ))}
          </div>
          <aside className="cart-summary"><h2>Order Summary</h2><div className="summary-row"><span>Total items</span><strong>{count}</strong></div><div className="summary-row grand-total"><span>Total cart amount</span><strong>{money(total)}</strong></div><button className="primary-button full" onClick={() => window.alert('Coming Soon! Checkout is not yet available.')}>Checkout — Coming Soon</button><button className="secondary-button full" onClick={() => navigate('plants')}>Continue Shopping</button></aside>
        </div>
      )}
    </main>
  );
}
