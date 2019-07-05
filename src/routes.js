//Global stuff

const HOME = "/";
const CREATE = "/create";
const SEARCH = "/search";
const MOVIE_DETAIL = "/:id";
const MOVIE_EDIT = "/:id/edit";
const MOIVE_DELETE = "/:id/delete";

const routes = {
  home: HOME,
  create: CREATE,
  search: SEARCH,
  movieDetail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return MOVIE_DETAIL;
    }
  },
  movieEdit: id => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return MOVIE_EDIT;
    }
  },
  movieDelete: id => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return MOIVE_DELETE;
    }
  }
};

export default routes;
