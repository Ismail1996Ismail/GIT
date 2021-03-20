//Функция filterNegative() принимает массив с любыми числами и возвращает массив состоящий только из положительных.
let arrNum = [123, -13, 0, 1474, 1, -312, -2];
function filterNegative(numbers) {
    let arr = [];
    for( i=0; i < numbers.length; i++){  
        if(numbers[i] >= 0) {
            arr.push(numbers[i])
        }
    };
    return arr;
};
filterNegative(arrNum);
// console.log(filterNegative(arrNum)); // выводим функцию в консоль.

//Функция filterString() принимает массив с любыми типами элементов и возвращает массив состоящий только из строчных элементов.
let NumStr = [123, "lorem", 0, 1474, "Ipsum", "Num", 10];
function filterString(string){
    let str= [];
    for( i=0; i < string.length; i++){
        if(typeof string[i] == "string"){
            str.push(string[i]);
        }
    };
    return str;
}
filterString(NumStr);
//  console.log(filterString(NumStr)); // выводим функцию в консоль.


//Функция filterLength() принимает два параметра: первый - массив с текстовыми элементами, второй - число.
// Функция должна вернуть только те элементы длина строки которых не больше, чем второй параметр.
let three=["js", "php", "react", "css"];
function filterLength(str, num){
    let arr=[];
    for(i=0; i < str.length; i++){
        if(str[i].length<=num){
            arr.push(str[i]);
        }   
    };
    return arr;
};
filterLength(three, 3);
// console.log(filterLength(three, 3)); // выводим функцию в консоль.

// 2 Создать функцию myMap(), которая принимает один параметр числовой массив и возвращает новый массив 
// увеличивая элементы старого в два раза.
let numMultiply=[12, 2, 3, 1, 10, 150];
function myMap(num){
    let arr=[];
    for( i=0; i < num.length; i++){       
        arr.push(num[i]*2);
    };
    return arr;
};
myMap(numMultiply);
// console.log(myMap(numMultiply)); // выводим функцию в консоль.

//3 Создать функцию reverseWords() которая принимает один параметр - строку. Функция должна вернуть строку в обратно порядке.
function reverseWords(string){
    arrString=string.split(" ");
    return arrString.reverse();
};
reverseWords("yoda doesn't speak like this");
// console.log(reverseWords("yoda doesn't speak like this")); // выводим функцию в консоль.

