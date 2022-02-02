import { useContext, useState } from "react";
import MyContext from "../context/MyContext";
import { ImBin } from "react-icons/im";
import "./cart.css";
import axios from "axios";

const validateOrder = (username, content, total, id) => {
  if (username === '') return null;
  axios.post('http://localhost:5000/order', { buyer: username, content: content, total: total, user_id : id})
  console.log(username, content, total, id)
}

const Cart = () => {
  const [username, setUsername] = useState('');
  const { cartContent, setCartContent, user } = useContext(MyContext);
  let total = 0;
  for (let i = 0; i < cartContent.split("£").length; i++) {
    total +=
      Number(cartContent.split("£")[i].split(";")[2]) *
      Number(cartContent.split("£")[i].split(";")[3]);
  }

  const handleFilter = (filtered) => {
    setCartContent(filtered.join("£"));
  };

  return (
    <>
      {!cartContent[0] && (
        <h4 className="cart-nothing">
          Nothing to see here
        </h4>
      )}
      <div className="cart-body">
        <div className="cart-recap">
          {cartContent[0] &&
            cartContent.split("£").map((item) => (
              <div key={item} className="cart-recap-card">
                <img
                  src={item.split(";")[0]}
                  alt=""
                  className="cart-recap-card-image"
                />
                <div className="cart-recap-infos">
                  <h4>{item.split(";")[1]}</h4>
                  <p>Price : {item.split(";")[2]} g / ea</p>
                  <p>Quantity : {item.split(";")[3]}</p>
                  <p>
                    Total :{" "}
                    {Number(item.split(";")[2]) * Number(item.split(";")[3])} g
                  </p>
                  <p
                    className="cart-recap-remove"
                    onClick={() =>
                      handleFilter(
                        cartContent
                          .split("£")
                          .filter(
                            (content) =>
                              content.split(";")[1] !== item.split(";")[1]
                          )
                      )
                    }
                  >
                    <ImBin />
                  </p>
                </div>
              </div>
            ))}
        </div>
        {cartContent[0] && (
          <div className="cart-total">
            <h3>TOTAL</h3>
            <h4>{total} GOLDS</h4>
            <input required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="In game name" className={user?.username ? 'hidden' : 'cart-total-input'}/>
            <button onClick={() => validateOrder(username, cartContent, total, user?.id)}>Confirm Order</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
