export const getBaseUrl = () => {
  // React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction
    ? "https://yo-ordeno.herokuapp.com/api"
    : "http://localhost:3000/api";
};
