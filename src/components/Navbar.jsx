import { AiFillHome, AiFillContacts } from 'react-icons/ai'
import { BsFillPersonFill, BsFillCartFill } from 'react-icons/bs';
import { AiFillShop } from 'react-icons/ai';
import { FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return <nav>
    <ul>
      <li className='list'>
        <Link to="/">
          <span className='icon'>
            <AiFillHome />
          </span>
          <span className='text'>
            Home
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="market">
        <span className='icon'>
            <AiFillShop />
          </span>
          <span className='text'>
            Market
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="infos">
        <span className='icon'>
            <FaInfo />
          </span>
          <span className='text'>
            Informations
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="contact">
        <span className='icon'>
            <AiFillContacts />
          </span>
          <span className='text'>
            Contact
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="account">
        <span className='icon'>
            <BsFillPersonFill />
          </span>
          <span className='text'>
            Account
          </span>
        </Link>
      </li>
      <li className='list'>
        <Link to="cart">
        <span className='icon'>
            <BsFillCartFill />
          </span>
          <span className='text'>
            Cart
          </span>
        </Link>
      </li>
    </ul>
  </nav>;
}

export default Navbar;