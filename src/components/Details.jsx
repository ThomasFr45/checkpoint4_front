import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFromDb } from "../axiosFunctions";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  useEffect(() => {
    getOneFromDb('item', id, setItem);
  }, [id])
  return <div>{item[0]?.name} <p>Missing the recipe</p></div>;
}

export default Details;