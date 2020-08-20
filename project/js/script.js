'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ],
    arrOfBtns: [],
    showMovie: function(){
        movieDB.movies = movieDB.movies.map(v => v.toLowerCase());
        movieDB.movies.sort();
        let list = '';
        for(let i = 0; i < movieDB.movies.length; i++){
            list +=  
            `<li class="promo__interactive-item">
                ${i + 1} . ${movieDB.movies[i]} 
                <div class="delete" data-movie-id="${i}"></div>
            </li>`;
        }
        newMoviesSeenList.innerHTML = list;
        
    },
    deliteMovie: function(id){
        movieDB.movies = movieDB.movies.filter((i, n) => {
            return n != id;
        });
        this.showMovie();
        this.setBtnId();
    },
    setBtnId: () =>{
        this.arrOfBtns = document.querySelectorAll('.delete');
        this.arrOfBtns.forEach(i => {
            i.addEventListener('click', () => {
                movieDB.deliteMovie(i.dataset.movieId);
            });
        });
    }
};




const spamBlock = document.querySelector('.promo__adv'),
    spamImages = spamBlock.querySelectorAll('img'),
    ganre = document.querySelector('.promo__genre'),
    newBackground = document.querySelector('.promo__bg'),
    moviesSeenList = document.querySelector('.promo__interactive-list'),
    form = document.querySelector('.add'),
    input = form.querySelector('.adding__input'),
    sendBtn = form.querySelector('button'),
    checkbox = form.querySelector('input[type=checkbox]');


    sendBtn.addEventListener('click', e => {
        e.preventDefault();
        let str = input.value;
        if(str.length > 21){
            str = str.slice(0, 21) + '...';
            movieDB.movies.push(str);
        }
        else{
            movieDB.movies.push(str);
        }
        if(checkbox.checked){
            console.log('favorite film');
        }
        input.value = '';
        movieDB.showMovie();
        movieDB.setBtnId();
    });

    const newMoviesSeenList = document.createElement('div');
    newMoviesSeenList.classList.add('promo__interactive-list');

    movieDB.showMovie();

    moviesSeenList.replaceWith(newMoviesSeenList);

    movieDB.setBtnId();

    newBackground.style.cssText = 'background: url("img/bg.jpg"); background-size: cover;';
    

    ganre.textContent = 'драма';



    spamImages.forEach(i => i.remove());




    


