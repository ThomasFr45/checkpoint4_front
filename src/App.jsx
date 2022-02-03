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
import Infos from "./components/Infos";
import Halfkins from "./components/Halfkins";
import Humans from "./components/Humans";
import Zumis from "./components/Zumi";
import Anurans from "./components/Anurans";
import Ursuns from "./components/Ursuns";

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
          <Route path="/infos" element={<Infos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route path="/infos/halfkins" element={<Halfkins />}/>
          <Route path="/infos/humans" element={<Humans />}/>
          <Route path="/infos/zumis" element={<Zumis />}/>
          <Route path="/infos/anurans" element={<Anurans />}/>
          <Route path="/infos/ursuns" element={<Ursuns />}/>
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
