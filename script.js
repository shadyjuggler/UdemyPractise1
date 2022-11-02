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
    "privat" : false,

    rememberMyFilms: function () {
        let movieName,
            movieRank;  
        for (let i = 0; i < 2; i++) {
            do {
                movieName = prompt(`What is the ${i + 1}st. movie what you've seen?", `);
                possibleAlert(movieName)
            } while (!movieName || movieName.length >= 50);
        
            do {
                movieRank = prompt("How could you rate it?", "");
                possibleAlert(movieRank)
            } while (!movieRank || movieRank.length >= 50)
        
            personalMovieDB.movies[movieName] = movieRank;
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB["count"] > 0 && personalMovieDB["count"] < 10) {
            console.log("To less films watched.");
        } else if (30 > personalMovieDB["count"] && personalMovieDB["count"] >= 10) {
            console.log("You are classic viewer.");
        } else if (personalMovieDB["count"] >= 30) {
            console.log("You are true fan.");
        } else {
            console.log("Something goes wrong.");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre;
            while (!genre) {
                genre = prompt(`Your fauvorite movie genre by ${i} number. `);
                possibleAlert(genre)
            } 
            personalMovieDB.genres[i - 1] = genre;
        }
    },
    toggleVisibleMyDB: function (privat) {
        if (privat)
            personalMovieDB["privat"] = false;
        else 
            personalMovieDB["privat"] = true;
    },
    showGenres: function (arr) {
        arr.forEach((item, i) => {
            console.log(`${i + 1}. любимый жанр - это ${item}.`)
        });
    }
}


personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.showGenres(personalMovieDB.genres);
personalMovieDB.showMyDB(personalMovieDB["privat"]);


function possibleAlert(value) {
    if (!value ) {
        alert("Please enter value.");
    } else if (value.length >= 50) {
        alert("Not more than 50 symbols.");
    }
}







