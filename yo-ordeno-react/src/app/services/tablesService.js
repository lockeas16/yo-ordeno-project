import axios from "axios";
import { getBaseUrl } from "./properties";

export const getTables = restaurant => {
  return axios
    .get(`${getBaseUrl()}/table/${restaurant}`, {
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

export const newTable = table => {
  return axios
    .post(`${getBaseUrl()}/table`, table, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const editTable = (table, _id) => {
  return axios
    .patch(`${getBaseUrl()}/table/${_id}`, table, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const deleteTable = id => {
  return axios
    .delete(`${getBaseUrl()}/table/${id}`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
