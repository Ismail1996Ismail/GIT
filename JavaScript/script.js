//forEach
//Дан массив с числами [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. Вывести в консоль только нечетные числа.
//(Для этого вам необходимо использовать if и узнать оператор про оператор ‘остаток от деления’ - % 

// let oddNumber=[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
// oddNumber.forEach(function (num){
//     if(num % 2 == 0){
//         console.log(num);
//     }
// });

//Дан массив со строчными элементами [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”].
// Вывести в консоль элементы у которых кол-во символов не больше 4-х. 

// let strArr=["lorem ipsum","javascript","php","css","react","git","html","mysql"];
// strArr.forEach(function (item){
//     if(item.length <= 4){
//         console.log(item);
//     }
// });

//filter
//Дан массив [1, -3, 5, 6, -7, 8, 9, -11]. Создайте новый массив в котором останутся только отрицательные элементы. 
let numbr=[1, -3, 5, 6, -7, 8, 9, -11];
let negNumbers = numbr.filter(function(item){
    return item < 0;
});
// console.log(negNumbers); // выводим в консоль

//Дан массив [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100]. Создать новый в котором будут только четные элементы этого массива. 
//(Нужен оператор остаток от деления - %). 

let numbr2=[10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
let evenNumbers = numbr2.filter(function(item){
    return item % 2 == 0;
});
//console.log(evenNumbers); // выводим в консоль

//Дан массив [ “lorem ipsum”, “javascript”, “php”, “css”, “react”, “git”, “html”, “mysql”] 
//создать новый массив состоящий только из элементов у которых длина строки не равна 3-м. 

let strArr2=["lorem ipsum","javascript","php","css","react","git","html","mysql"];
let strlngNo3 = strArr2.filter(function(item){
    return item.length != 3;
});
// console.log(strlngNo3); // выводим в консоль

//Map
//Дан массив [5, 6, 7, 8, 9], сделайте из него массив состоящий из квадратов этих числе. (25, 36.. и тд)
let numbr3=[5, 6, 7, 8, 9];
let square=numbr3.map(function(item){
    return item * item;
});
// console.log(square); // выводим в консоль

//Дан массив с объектами [{а: 10, b: 5}, {а: 20, b: 22}, {a: 131, b:55}]. 
//Создать новый массив элементами которого буду сумма свойств объекта. Должно получится [15, 42, 186]
let arrObj=[{a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b:55}];
let newArrObj=arrObj.map(function(item){
    return item.a+item.b;
});
// console.log(newArrObj); // выводим в консоль;