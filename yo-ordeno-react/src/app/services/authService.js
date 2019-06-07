import axios from "axios";

// Creamos el header con el token
axios.defaults.headers = {
  Authorization: localStorage.getItem("TOKEN")
};

// React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";

export const signup = auth => {
  return axios
    .post(`${base_url}/auth/signup`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const login = auth => {
  return axios
    .post(`${base_url}/auth/login`, auth)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};

export const confirmation = token => {
  return axios
    .patch(`${base_url}/auth/confirm/${token}`)
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
