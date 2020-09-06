'use strict';

const ans = prompt('enter your name');

const reg = /n/i;

console.log(reg.test(ans));
/*
flags
i - ищет вне зависимости от регистра
g -  сразу несколько
m - многострочный режим
ruls
. - all elements

classes

\d - цифры
\w - слова
\s - пробелы
\D - не числа
\W - не буквы
\S - не пробелы
*/
//console.log(ans.search(reg));
// console.log(ans.match(reg));

// const ans = prompt('Password');

// console.log(ans.replace(/./, 'lololo'));

//console.log('12-32-54'.replace(/-/g, ''));
