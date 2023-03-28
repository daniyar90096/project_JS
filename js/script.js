const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
const secondQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	thirdQuestion = prompt('На сколько оцените его?', ''),
	fourthQuestion = prompt('Один из последних просмотренных фильмов?', ''),
	fifthQuestion = prompt('На сколько оцените его?', '');

personalMovieDB.movies[secondQuestion] = thirdQuestion;
personalMovieDB.movies[fourthQuestion] = fifthQuestion;

console.log(personalMovieDB);
