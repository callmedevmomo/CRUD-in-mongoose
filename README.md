
## Mongoose Time!

# This challenge is based on videos #2.0 to #3.12

# Challenge

- Using Mongoose, create a CRUD (Create, Read, Delete, Update) Application for Movies.
- The routes you have to make are:
- [x] / <-- See all movies
- [x] /create <-- Create a movie (html form)
- [x] /:id <-- See movie by ID 
- [x] /:id/edit <-- Edit movie by ID 
- [x] /:id/delete <-- Delete movie by ID
- [x] /search <-- Search movies

### On the line 12 of models/Movie.js you have to create a complete schema for your movie model. The schema should have the fields  id, title, year, rating, synopsis, genres[], uploadedAt


* All the fields are required.
* You need to validate that the year is a number.
* You need to validate that the title is at least 3 characters long.
* When I create a movie I should be redirected to the detail page of that movie.
* When a movie is not found I should see a 404.
* When I delete a movie I should be redirected to the home page.
* On the /search page I should be able to filter by /search?year=1900 or /  search?rating=9.6 

