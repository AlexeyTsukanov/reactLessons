'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const spamBlock = document.querySelector('.promo__adv'),
        spamImages = spamBlock.querySelectorAll('img'),
        ganre = document.querySelector('.promo__genre'),
        newBackground = document.querySelector('.promo__bg'),
        moviesSeenList = document.querySelector('.promo__interactive-list'),
        form = document.querySelector('.add'),
        input = form.querySelector('.adding__input'),
        checkbox = form.querySelector('[type=checkbox]');


    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const removeSpam = (arr) =>{
        arr.forEach(i => i.remove());
    };

    const makeChanges = () => {
        newBackground.style.cssText = 'background: url("img/bg.jpg"); background-size: cover;';
        ganre.textContent = 'драма';
    };

    form.addEventListener('submit', e => {
        e.preventDefault();

        let str = input.value;
        if(str){
            if(str.length > 21){
                str = str.slice(0, 21) + '...';
            }
            movieDB.movies.push(str);
            if(checkbox.checked){
                console.log('favorite film');
            }
            input.value = '';
            showMovie(movieDB.movies, moviesSeenList);
        }
    });

    const sortArr = (arr) => {
        arr = arr.map(i => i.toLowerCase());
        return arr.sort();
    };

    const showMovie = (films, parrent) => {
        films = sortArr(films);
        parrent.innerHTML = "";
        films.forEach((film, i) => {
            parrent.innerHTML +=  
            `<li class="promo__interactive-item">
                ${i + 1} . ${film} 
                <div class="delete"></div>
            </li>`;
        });

        document.querySelectorAll('.delete').forEach((btn , i) => {
            btn.addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                showMovie(films, parrent);
            });
        });
    };

    removeSpam(spamImages);
    makeChanges();
    showMovie(movieDB.movies, moviesSeenList);

});