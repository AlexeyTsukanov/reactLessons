'use strict';

let numberOfFilms;

const persone = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function start(){
    numberOfFilms = +prompt("How many films have you seen?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How many films have you seen?", "");
    }
}

//start();

    function rememberMyFilms(){
        while(true){
            let lastFilm = prompt("The lastest film what you were watching", ""),
            lastFilmsGrade = prompt("Write your grade of this film", "");
            if(lastFilm === "" || lastFilmsGrade === ""){
                break;
            }
            lastFilmsGrade = +lastFilmsGrade;
            if(lastFilm !== null && lastFilmsGrade !== null && lastFilm !== '' && lastFilmsGrade !== '' && 
            isNaN(lastFilmsGrade) === false && lastFilm.length < 50){
                persone.movies[lastFilm] = lastFilmsGrade;
            }
            else{
                alert('input error, try again');
            }
        }
    }

   // rememberMyFilms();


    function detectPersonalLevel(){
        if(persone.count < 10){
            alert('not many');
        }
        else if(persone.count >= 10 && persone.count <= 30){
            alert('enought');
        }
        else if(persone.count > 30){
            alert('you are kinoman');
        }
        else{
            alert('error');
        }
    }

    //detectPersonalLevel();

    function showMyDB(hidden){
        if(!hidden){
            console.log(persone);
        }
    }

    showMyDB(persone.privat);

    function writeYourGenres(p){
        for(let i = 1; i < 4; i++){
            p.genres[i] = prompt(`your favorite genre number ${i}`);
        }
    }

    writeYourGenres(persone);


