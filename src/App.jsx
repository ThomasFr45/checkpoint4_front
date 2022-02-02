import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Market from "./components/Market.jsx";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Account from "./components/Account";
import MyContext from "./context/MyContext";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [user, setUser] = useState([]);
  const [cartContent, setCartContent] = useState(localStorage.getItem('cartContent') ? localStorage.getItem('cartContent') : '');
  return (
    <div className="App">
      <MyContext.Provider
        value={{
          user: user,
          setUser: setUser,
          cartContent: cartContent,
          setCartContent: setCartContent,
        }}
      >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/market" element={<Market />} />
          <Route path="/infos" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
