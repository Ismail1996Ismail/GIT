//  //Используя цикл вывести числа от 0 до 1000 в консоль.
//  /*
//  let i = 0;
//  while(i++ < 1000) console.log(i);
//  */
//  /*
//  Дан массив [“html”, “css”, “js”, “react”] . Напишите код, который принимает с помощью prompt() 
//  любое значение и будет добавлять его в конец массива. 
//  */
//  let a=["html", "css", "js", "react"];
//  a.push(prompt());
//  //console.log(a);
// //Используя цикл вывести все элементы предыдущего массива
// for(let i=0; i < a.length; i++) {
//     console.log(a[i]);
// };
// //Дан массив [10, 123, 13, 481, 1931]. Используя цикл вывести сумму элементов массива, т.е. 10+123+13… и т.д.
// let c=[10, 123, 13, 481, 1931];
// function sumArray(array) {
//     let x = 0;
     
//     for(let i=0; i < array.length; i++) {
//     x += array[i]; 
//     }
//     return x;
// }
// sumArray(c);
// console.log(sumArray(c));
//Дан массив [“frontend”, [“js”, “html”, “css”], “react”, [“node js”, “mysql”], “php”] - как вы видите некоторые элементы массива 
//сами являются массивами: подумайте, как можно вывести элементы вложенного массива, к примеру “js”, “css”, “mysql”.
let y=["frontend", ["js", "html", "css"], "react", ["node js", "mysql"], "php"];
// console.log(y[1][0],y[1][2],y[3][1]);
//Супер-сложное задание: используя цикл for вывести все элементы массива, при этом раскрывая вложенный массив и выводя его элементы.
 for(let i=0; i<y.length; i++) {
     if(typeof y[i] === 'object'){
         for(let j = 0; j < y[i].length; j++){
             console.log(y[i][j])
         }
     } else {
         console.log(y[i])
     }
 };

 


