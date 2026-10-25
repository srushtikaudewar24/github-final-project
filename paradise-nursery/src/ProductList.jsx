import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from './CartSlice';

// Six different plants in each of THREE categories: 18 unique houseplants total.
// Each record includes an individual thumbnail, name, description and price.
const plantsArray = [
  { name: 'Indoor Classics', description: 'Timeless leafy favorites for every home.', plants: [
    { id: 'monstera', name: 'Monstera Deliciosa', price: 34, description: 'Bold split leaves for a tropical look.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80' },
    { id: 'fiddle-leaf', name: 'Fiddle-Leaf Fig', price: 46, description: 'Sculptural, dramatic glossy foliage.', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&auto=format&fit=crop&q=80' },
    { id: 'pothos', name: 'Golden Pothos', price: 19, description: 'Easy-care trailing golden-green vines.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=80' },
    { id: 'rubber-plant', name: 'Rubber Plant', price: 32, description: 'Deep-green leaves with a polished sheen.', image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&auto=format&fit=crop&q=80' },
    { id: 'peace-lily', name: 'Peace Lily', price: 26, description: 'Graceful foliage and white blooms.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&auto=format&fit=crop&q=80' },
    { id: 'philodendron', name: 'Heartleaf Philodendron', price: 23, description: 'Heart-shaped leaves that trail beautifully.', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&auto=format&fit=crop&q=80' },
  ] },
  { name: 'Air Purifiers', description: 'Fresh greenery to brighten everyday spaces.', plants: [
    { id: 'snake-plant', name: 'Snake Plant', price: 28, description: 'Upright architectural leaves, very hardy.', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?w=600&auto=format&fit=crop&q=80' },
    { id: 'spider-plant', name: 'Spider Plant', price: 18, description: 'Arching striped leaves and easy growth.', image: 'https://images.unsplash.com/photo-1512427691650-1e4b9a0a1d4f?w=600&auto=format&fit=crop&q=80' },
    { id: 'boston-fern', name: 'Boston Fern', price: 24, description: 'Soft, feathery fronds for humid rooms.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&auto=format&fit=crop&q=80' },
    { id: 'areca-palm', name: 'Areca Palm', price: 39, description: 'A palm with lush, graceful fronds.', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&auto=format&fit=crop&q=80' },
    { id: 'chinese-evergreen', name: 'Chinese Evergreen', price: 29, description: 'Colorful leaves suited to indirect light.', image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=600&auto=format&fit=crop&q=80' },
    { id: 'zz-plant', name: 'ZZ Plant', price: 31, description: 'Glossy stems that tolerate low light.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80' },
  ] },
  { name: 'Succulents & Cacti', description: 'Small-space plants with big personality.', plants: [
    { id: 'aloe-vera', name: 'Aloe Vera', price: 16, description: 'Sculptural, thick leaves and easy care.', image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&auto=format&fit=crop&q=80' },
    { id: 'jade-plant', name: 'Jade Plant', price: 21, description: 'Rounded leaves on a sturdy woody stem.', image: 'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?w=600&auto=format&fit=crop&q=80' },
    { id: 'echeveria', name: 'Echeveria', price: 14, description: 'Beautiful compact rosettes.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=80' },
    { id: 'zebra-haworthia', name: 'Zebra Haworthia', price: 17, description: 'Striped miniature succulent.', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&auto=format&fit=crop&q=80' },
    { id: 'barrel-cactus', name: 'Golden Barrel Cactus', price: 25, description: 'Round golden-spined desert classic.', image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=600&auto=format&fit=crop&q=80' },
    { id: 'string-of-pearls', name: 'String of Pearls', price: 22, description: 'Charming cascading bead-like leaves.', image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=80' },
  ] }
];
export default function ProductList({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const addedToCart = Object.fromEntries(items.map(item => [item.name, true]));
  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const handleHomeClick = () => navigate('home');
  const handlePlantsClick = () => navigate('plants');
  const handleCartClick = () => navigate('cart');
  return (
    <main className="content" aria-label="Plant product listing">
      <div className="product-navigation"><button onClick={handleHomeClick}>Home</button><button onClick={handlePlantsClick}>Plants</button><button onClick={handleCartClick}>🛒 Cart ({cartQuantity})</button></div><div className="page-intro"><p className="eyebrow">The collection</p><h1>Find your perfect plant</h1><p>Browse 18 unique houseplants across three categories.</p></div>
      {plantsArray.map(category => (
        <section key={category.name} className="plant-category product-list" aria-label={category.name}>
          <div className="section-heading"><h2>{category.name}</h2><p>{category.description}</p></div>
          <div className="product-grid">
            {category.plants.map(plant => (
              <article className="product-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/600x450/e6efe3/315443?text=Paradise+Nursery'; }} />
                <div className="product-details"><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-actions"><strong>${plant.price.toFixed(2)}</strong><button type="button" className="primary-button" disabled={addedToCart[plant.name]} onClick={() => dispatch(addItem(plant))}>{inCart.has(plant.id) ? 'Added to Cart ✓' : 'Add to Cart'}</button></div></div>
              </article>
            ))}
          </div>
        </section>
      ))}
      <button className="text-button" onClick={() => navigate('cart')}>View shopping cart →</button>
    </main>
  );
}
