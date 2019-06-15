import axios from "axios";
import { getBaseUrl } from "./properties";

export const deleteDish = id => {
  return axios
    .delete(`${getBaseUrl()}/dish/${id}`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const newDish = dish => {
  return axios
    .post(`${getBaseUrl()}/dish`, dish, {
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const editDish = (dish, _id) => {
  return axios
    .patch(`${getBaseUrl()}/dish/${_id}`, dish, {
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const getDishes = restaurant => {
  return axios
    .get(`${getBaseUrl()}/dish/${restaurant}`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN"),
        "Content-Type": "application/json"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
