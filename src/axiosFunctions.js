import axios from 'axios';

const getFromDb = (where, setter) => {
  axios.get(`http://localhost:5000/${where}`).then(response => setter(response.data));
};

const getOneFromDb = (where, id, setter) => {
  axios.get(`http://localhost:5000/${where}/${id}`).then(response => setter(response.data));
}

const getRecipe = (id, setter) => {
  axios.get(`http://localhost:5000/item/${id}/recipe`).then(response => setter(response.data));
}

export {getFromDb, getOneFromDb, getRecipe};