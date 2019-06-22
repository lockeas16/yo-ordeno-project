import socketIOClient from "socket.io-client";
import { getBaseUrl } from "./properties";

export const createSocket = () => {
  return socketIOClient(`${getBaseUrl()}/kitchen`);
};
