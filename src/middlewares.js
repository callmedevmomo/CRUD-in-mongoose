import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Nomad Movies";
  res.locals.routes = routes;
  next();
};
