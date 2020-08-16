'use strict';
/*
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};

console.log(Object.keys(options).length);


for( let key in options){
    //console.log(`value ${key} = ${options[key]}`);
    if(typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`value ${i} = ${options[key][i]}`);
        }
    }else{
        console.log(`value ${key} = ${options[key]}`);   
    }
}
*/

 const arr = [12, 28, 3, 4, 11];

 console.log(arr.sort(compareNum));

 function compareNum(a, b){
     return a - b;
 }

// arr.pop(); //delite last el
// arr.push(10); // add last el

// arr.forEach(function(item, i, arr) {
//     console.log(`${i} : ${item} in mass ${arr}`);
// });


// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for( let val of arr){
//     console.log(val);
// }

// const str = prompt("Your products", "");
// const products = str.split(', ');
// console.log(products.sort());
// console.log(products.join('; '));