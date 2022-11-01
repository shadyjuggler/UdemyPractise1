let numberOfFilms;

function start () {
    numberOfFilms = +prompt("How many films have you seen already", "Enter value");

    while (!numberOfFilms) {
        possibleAlert(numberOfFilms);

        numberOfFilms = +prompt("How many films have you seen already", "Enter value");
    }
}

start();

const personalMovieDB = {
    "count" : numberOfFilms,
    "movies" : {},
    "actors" : {},
    "genres" : [],
    "privat" : false
}

let movieName,
    movieRank;

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        do {
            movieName = prompt(`What is the ${i + 1}st. movie what you've seen?", `);
            possibleAlert(movieName)
        } while (!movieName || movieName.length >= 50);
    
        do {
            movieRank = prompt("How could you rate it?", "");
            possibleAlert(movieRank)
        } while (!movieRank || movieName.length >= 50)
    
        personalMovieDB.movies[movieName] = movieRank;
    
       
        // Or this one:
        // if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        //     personalMovieDB.movies[a] = b;
        //     console.log('done');
        // } else {
        //     console.log('error');
        //     i--;
        // }
    }
}

rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB["count"] > 0 && personalMovieDB["count"] < 10) {
        console.log("To less films watched.");
    } else if (30 > personalMovieDB["count"] && personalMovieDB["count"] >= 10) {
        console.log("You are classic viewer.");
    } else if (personalMovieDB["count"] >= 30) {
        console.log("You are true fan.");
    } else {
        console.log("Something goes wrong.");
    }
}

detectPersonalLevel ();


function possibleAlert(value)  {
    if (!value ) {
        alert("Please enter value.");
    } else if (value.length >= 50) {
        alert("Not more than 50 symbols.");
    }
} 

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        let genre;
        while (!genre) {
            genre = prompt(`Your fauvorite movie genre by ${i} number. `);
            possibleAlert(genre)
        } 
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres ();

showMyDB (personalMovieDB["privat"]);
