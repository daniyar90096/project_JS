'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '').trim();
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function() {
        if (personalMovieDB['privat'] === false) {
            console.log(personalMovieDB);
        }
    },
    writeMyGenres: function() {
        first: for (let i = 1; i < 4; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (personalMovieDB.genres[i-1] === '' || personalMovieDB.genres[i-1] === null) {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
            };
        };
        personalMovieDB.genres.forEach(function (name, i) {
            console.log(`Любимый жанр ${i+1} - это ${name}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        };
    },
};

personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeMyGenres();
personalMovieDB.toggleVisibleMyDB();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//               b = prompt('На сколько оцените его?', '').trim();
        
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB() {
//     if (personalMovieDB['privat'] === false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeMyGenres() {
//     for (let i = 1; i < 4; i++) {
//         personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
//     }
// }

// writeMyGenres();

