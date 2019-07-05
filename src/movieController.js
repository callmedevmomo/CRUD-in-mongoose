/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie from "./models/Movie";
import routes from "./routes";
// Add your magic here!

export const handleHome = async (req, res) => {
  try {
    const movies = await Movie.find({}).sort({ _id: -1 });
    if (movies) {
      res.render("home", { pageTitle: "HOME", movies });
    } else {
      throw Error("404");
    }
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "HOME", movies: [] });
  }
};
export const handleGetCreate = (req, res) => {
  res.render("create", { pageTitle: "CREATE" });
};
export const handlePostCreate = async (req, res) => {
  const {
    body: { name, title, year, rating, synopsis, genres }
  } = req;
  const myGenres = genres.split(",").map(String);
  const newMovie = await Movie.create({
    id: name,
    title,
    year,
    rating,
    synopsis,
    genres: myGenres
  });
  res.redirect(routes.movieDetail(newMovie._id));
};
export const handleSearch = async (req, res) => {
  const {
    query: { term: searchingBy, rating: searchRating, year: searchYear }
  } = req;
  let movies = [];
  try {
    if (searchingBy) {
      movies = await Movie.find({
        title: { $regex: searchingBy, $options: "i" }
      });
    } else if (searchRating) {
      movies = await Movie.find({ rating: { $gte: searchRating } });
    } else if (searchYear) {
      movies = await Movie.find({ year: { $gte: searchYear } });
    }
  } catch (error) {
    console.log(error);
  }
  res.render("search", {
    pageTitle: "SEARCH",
    searchingBy,
    searchRating,
    searchYear,
    movies
  });
};
export const handleDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById({ _id: id });
    res.render("detail", { pageTitle: `DETAIL ${movie.title}`, movie });
  } catch (error) {
    res.redirect(routes.home);
  }
};
export const handleDelete = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie.findOneAndRemove({ _id: id });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
export const handleGetEdit = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const movie = await Movie.findById({ _id: id });
    res.render("edit", { pageTitle: `Edit ${movie.title}`, movie });
  } catch (error) {
    console.log(error);
  }
};

export const handlePostEdit = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres }
  } = req;
  try {
    await Movie.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres }
    );
    res.redirect(routes.movieDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};
