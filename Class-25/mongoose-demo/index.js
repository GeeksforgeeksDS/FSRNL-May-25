const mongoose = require('mongoose');

// To define a model in mongoose
// first we need to define the schema

mongoose.connect('mongodb://localhost:27017/movies-db')
    .then(() => console.log('connection open'))
    .catch((err) => console.log(err));

const movieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    isWatched: Boolean,
    year: Number
});

// Model name should start with capital letter and it should singular
const Movie = mongoose.model('Movie', movieSchema);

// Movie => movies
// User => users
// Product => products

// const newMovie = new Movie({ name: 'One More New Movie 1', year: 2008, rating: 7.5, isWatched: false });


// newMovie.save()
//     .then((m) => console.log(m));
