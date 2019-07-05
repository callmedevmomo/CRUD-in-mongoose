import express from "express";
import routes from "./routes";
import {
  handleHome,
  handleSearch,
  handleDetail,
  handleDelete,
  handleGetEdit,
  handlePostEdit,
  handleGetCreate,
  handlePostCreate
} from "./movieController";
const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, handleHome);

movieRouter.get(routes.create, handleGetCreate);
movieRouter.post(routes.create, handlePostCreate);

movieRouter.get(routes.search, handleSearch);

movieRouter.get(routes.movieDetail(), handleDetail);

movieRouter.get(routes.movieEdit(), handleGetEdit);
movieRouter.post(routes.movieEdit(), handlePostEdit);

movieRouter.get(routes.movieDelete(), handleDelete);

export default movieRouter;
