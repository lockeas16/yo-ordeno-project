import axios from "axios";
import { getBaseUrl } from "./properties";

// Creamos el header con el token
// axios.defaults.headers = {
//   Authorization: localStorage.getItem("TOKEN")
// };

export const signup = auth => {
  return axios
    .post(`${getBaseUrl()}/auth/signup`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const login = auth => {
  return axios
    .post(`${getBaseUrl()}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const confirmation = token => {
  return axios
    .patch(`${getBaseUrl()}/auth/confirm/${token}`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const edit = user => {
  return axios
    .patch(`${getBaseUrl()}/auth/edit`, user, {
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

export const loggedin = () => {
  return axios
    .get(`${getBaseUrl()}/auth/loggedin`, {
      headers: {
        Authorization: localStorage.getItem("TOKEN")
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
