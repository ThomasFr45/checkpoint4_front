import { useState, useEffect, useContext } from 'react';
import { getFromDb } from '../axiosFunctions';
import { Link } from 'react-router-dom';
import './market.css';
import MyContext from '../context/MyContext';

const Market = () => {
  const { cartContent, setCartContent } = useContext(MyContext)
  const [ready, setReady] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getFromDb('item', setItems);
    setReady(true);
  }, []);
  
  const handleCartAdd = (name, price, image, amount) => {
    if (isNaN(amount)) {
      alert('Please, enter a valid amount');
      return null;
    }
    if (cartContent === '') {
      const newItem = `${image};${name};${price};${amount}`;
      localStorage.setItem('cartContent', newItem);
      setCartContent(localStorage.getItem('cartContent'));
    } else {
      if (cartContent.split('£').filter(item => item.split(';')[1] === name)[0]) {
        const temp = cartContent.split('£').map((item) => item.split(';'));
      for (let i = 0; i < temp.length; i++) {
        const newValue = Number(temp[i][3]) + Number(amount);
        if (temp[i][1] === name) temp[i][3] = newValue;
      }
      localStorage.setItem('cartContent', temp.map((item) => item.join(';')).join('£'));
      setCartContent(localStorage.getItem('cartContent'));
      } else {
        const newItem = `${cartContent}£${image};${name};${price};${amount}`;
      localStorage.setItem('cartContent', newItem);
      setCartContent(localStorage.getItem('cartContent'));
      }
    }
  }

  if (!ready) return null;
  return (
    <div className="market-card-container">{items.map(item => (
      <div key={item.id} className="market-card">
        <img src={item.image} alt={item.name} className="market-card-image" />
        <h4>{item.name}</h4>
        <p>{item.price} g / ea</p>
        <div className="market-card-buttons"><Link to={`/details/${item.id}`}><button className="market-card-button">Infos</button></Link>
        <button className="market-card-button" onClick={() => handleCartAdd(item.name, item.price, item.image, prompt('How many do you want to buy ?'))}>Order</button></div>
      </div>))}</div>
  );
}

export default Market;