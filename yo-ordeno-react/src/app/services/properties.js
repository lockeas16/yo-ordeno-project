export const getBaseUrl = () => {
  // React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
  const isProduction = process.env.NODE_ENV === "production";
  return isProduction ? "url_de_heroku" : "http://localhost:3000/api";
};
