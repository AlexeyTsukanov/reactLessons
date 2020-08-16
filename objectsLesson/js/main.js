'use strict';

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