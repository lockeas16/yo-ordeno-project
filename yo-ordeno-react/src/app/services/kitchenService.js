import socketIOClient from "socket.io-client";
import axios from "axios";
import { getBaseUrl } from "./properties";

export const createSocket = () => {
  return socketIOClient(`${getBaseUrl()}/kitchen`);
};

export const updateDish = (restaurant, order, dish) => {
  return axios
    .patch(
      `${getBaseUrl()}/restaurant/${restaurant}/order/${order}/dish/${dish}`,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw error.response.data;
    });
};
