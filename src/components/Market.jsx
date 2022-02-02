import { useState, useEffect } from 'react';
import { getFromDb } from '../axiosFunctions';
import { Link } from 'react-router-dom';
import './market.css';

const handleCartAdd = (id, amount) => {
  if (isNaN(amount)) {
    alert('Please, enter a valid amount');
    return null;
  }
  alert('Perfect')
}

const Market = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getFromDb('item', setItems)
  }, []);
  return <div className="market-card-container">{items.map(item => (
    <div key={item.id} className="market-card">
      <img src={item.image} alt={item.name} className="market-card-image" />
      <h4>{item.name}</h4>
      <p>{item.price} g / ea</p>
      <div className="market-card-buttons"><Link to={`/details/${item.id}`}><button>Infos</button></Link>
      <button onClick={() => handleCartAdd(item.id, prompt('How many do you want to buy ?'))}>Order</button></div>
    </div>))}</div>;
}

export default Market;