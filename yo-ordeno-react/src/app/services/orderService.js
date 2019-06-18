import axios from "axios";
import { getBaseUrl } from "./properties";

export const getTableOnRestaurant = (id, restaurant) => {
  return axios.get(`${getBaseUrl()}/restaurant/${restaurant}/table/${id}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const getRestaurantDishes = restaurant => {
  return axios.get(`${getBaseUrl()}/restaurant/${restaurant}/dishes/`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
};
