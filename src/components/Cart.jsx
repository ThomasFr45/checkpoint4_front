import { useContext } from "react";
import MyContext from "../context/MyContext";

const Cart = () => {
  const { user } = useContext(MyContext)
  console.log(user)
  return null;
}

export default Cart;