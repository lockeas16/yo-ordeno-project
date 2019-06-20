import socketIOClient from "socket.io-client";
import { getBaseUrl } from "./properties";

export const creatSocket = () => {
  return socketIOClient(`${getBaseUrl()}/kitchen/`);
};
