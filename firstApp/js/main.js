let numberOfFilms = prompt("How many films have you seen?", "");


const persone = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("The lastest film what you were watching", ""),
    lastFilmsGrade = prompt("Write your grade of this film", "");

persone.movies[lastFilm] = lastFilmsGrade;

console.log(persone);

