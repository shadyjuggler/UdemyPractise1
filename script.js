const numberOfFilms = +prompt("How many films have you seen already", "Enter value");

const personalMovieDB = {
    "count" : numberOfFilms,
    "movies" : {},
    "actors" : {},
    "genres" : [],
    "privat" : false
}

let a = prompt("What is the last movie what you've seen?", ""),
    b = prompt("How could you rate it?", ""),
    c = prompt("What is the last movie what you've seen?", ""),
    d = prompt("How could you rate it?", "");


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
