/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

movieDB.movies.sort();


const spamBlock = document.querySelector('.promo__adv'),
    spamImages = spamBlock.querySelectorAll('img'),
    ganre = document.querySelector('.promo__genre'),
    newBackground = document.querySelector('.promo__bg'),
    moviesSeenList = document.querySelector('.promo__interactive-list');

    const newMoviesSeenList = document.createElement('div');
    newMoviesSeenList.classList.add('promo__interactive-list');

    for(let i = 0; i < movieDB.movies.length; i++){
        newMoviesSeenList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i + 1} . ${movieDB.movies[i]}
        <div class="delete"></div>
        </li>`);
    }

    moviesSeenList.replaceWith(newMoviesSeenList);

    newBackground.style.cssText = 'background: url("img/bg.jpg"); background-size: cover;';
    

    ganre.textContent = 'драма';



    spamImages.forEach(i => i.remove());

