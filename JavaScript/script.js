 //1) Дан массив let a = ['lorem', 123, true, 'ipsum']; Вывести длинну массива.
 let a = ['lorem', 123, true, 'ipsum'];
 console.log(a.length);
 /* 2) Для того же массива выведите первый элемент и последний элемент 
 (с учетом того, что количество элементов может меняться, а ваш код должен всегда работать)*/
 console.log(a[0],a[a.length-1]);
 // 3) Дан пусто массив let em = []; Заполните его 5-ю различными элементами. Используйте методы для работы с массивами
 let em = [];
 em.push("red",200,"blue",300,"black");
 console.log(em);
 // 4) Добавьте в начало предыдущего массива 3 новых элемента 
 em.unshift("one",2,3);
 console.log(em);
 
 // 5) Удалите один элемент с начала массива и два элемента с конца
 em.shift();
 em.pop();
 em.pop();
 console.log(em);

 // 6) Дан массив с нечетными числами let number = [1, 3, 5, 7, 9]. Выведите элементы массива так, чтобы числа были четными
 let number = [1, 3, 5, 7, 9];
 console.log(number.map(function(item){ return item+1}));