'use strict';


const persone = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        this.count = +prompt("How many films have you seen?", "");
    
        while(this.count == '' || this.count == null || isNaN(this.count)){
            this.count = +prompt("How many films have you seen?", "");
        }
    },
    rememberMyFilms: function(){
        while(true){
            let lastFilm = prompt("The lastest film what you were watching", ""),
            lastFilmsGrade = prompt("Write your grade of this film", "");
            if(lastFilm === "" || lastFilmsGrade === ""){
                break;
            }
            lastFilmsGrade = +lastFilmsGrade;
            if(lastFilm !== null && lastFilmsGrade !== null && lastFilm !== '' && lastFilmsGrade !== '' && 
            isNaN(lastFilmsGrade) === false && lastFilm.length < 50){
                this.movies[lastFilm] = lastFilmsGrade;
            }
            else{
                alert('input error, try again');
            }
        }
    },
    detectPersonalLevel: function(){
        if(this.count < 10){
            alert('not many');
        }
        else if(this.count >= 10 && this.count <= 30){
            alert('enought');
        }
        else if(this.count > 30){
            alert('you are kinoman');
        }
        else{
            alert('error');
        }
    },
    showMyDB: function (){
        if(!this.hidden){
            console.log(this);
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 4; i++){
            let str = prompt(`your favorite genre number ${i}`);
            if(str !== '' && str !== null ){
                this.genres[i-1] = str;
            }
            else{
                i--;
            }
        }
        this.genres.forEach((element, number) => {
            console.log(`my favorite ganre #${number + 1} - is ${element}`);
        });
    },
    toggleVisiteMyDB: function(){
        if(this.hidden){
            this.hidden = false;
        }
        else{
            this.hidden = true;
        }
    }
};
