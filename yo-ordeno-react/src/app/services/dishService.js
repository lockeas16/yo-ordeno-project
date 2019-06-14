import axios from "axios";
import { getBaseUrl } from "./properties";

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
