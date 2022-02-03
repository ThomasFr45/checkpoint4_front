import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneFromDb, getRecipe } from "../axiosFunctions";

const Details = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);
  const [recipe, setRecipe] = useState([]);
  useEffect(() => {
    getOneFromDb('item', id, setItem);
    getRecipe(id, setRecipe);
  }, [id])
  return (
  <div>
    {item[0]?.name}
    <ul>
    {recipe[0]?.content.split(';').map(item => <li key={item}>{item}</li>)}
    </ul>
  </div>
  );
}

export default Details;