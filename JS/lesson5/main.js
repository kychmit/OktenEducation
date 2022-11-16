// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function per(a,b) {
//     let resolt = a + b * 2
//     console.log(resolt)
// }
// per(20, 50)

// ------------------------------------------------------------------------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle (PI , r) {
//     return  PI * r** 2;
// }
// console.log(circle(3.14, 23))

// -------------------------------------------------------------------------------------------

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cilinder (PI , r ,h){
//     return 2 * PI * r * (r +h);
// }
// console.log(cilinder(3.14, 23,17))

// -------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив та виводить кожен його елемент

// let users = [
//     {name: 'kate', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'kate', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'kate', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
// function documentUsers  (pop){
//     for (const popElement of  pop){
//         console.log(popElement)
//     }
// }
// documentUsers(users)

// -------------------------------------------------------------------------------------------

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text(arr) {
//     for (const item of arr) {
//         console.log(item)
//     }
// }
// text([])

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function pop(text){
//     document.write(`<ul>
//                       <li>${text}</li>
//                       <li>${text}</li>
//                       <li>${text}</li>
//                    </ul> `)
// }
// pop('hello')

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function pop(text, number){
//
//     document.write(`<ul>`){
//
//         for (let i = 0; i > num; i++)
//             }
//             document.write(`</ul>`)
// }

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [8,9,16,true,false,'hello']
// function pop (array) {
//     document.write(`<ul>`)
//     for(const item of array)  {
//         document.write(`<li> ${item} </li>`)
//     }
//     document.write(`</ul>`)
// }

// -------------------------------------------------------------------------------------------

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 1 , name: 'kate', age: 31},
//     {id: 2 , name: 'petya', age: 30},
//     {id: 3 , name: 'kolya', age: 29},
//     {id: 4 , name: 'danylo', age: 28},
//     {id: 5 , name: 'max', age: 30},
//     {id: 6 , name: 'anya', age: 31},
// ]
// function usersList (pop){
//     for (const popElement of pop){
//         document.write(`<div> ${popElement.id} ${popElement.name}
// </div>`)
//     }
// }
// usersList(users)

// -------------------------------------------------------------------------------------------

// - створити функцію яка повертає найменьше число з масиву
//  const arr = [1, 4, -6,0, 100000];
// const minItem = function (array) {
//     let min = array[0];
//     for (const item of array){
//         if (item < min){
//             min = item
//         }
//     }
//     return min ;
// }
// let  minItem1 = minItem(arr);
// console.log(minItem1)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const arr = [1,3,5];
// function pop = array => {
//     let sum = 0;
//     for (const item of array){
//         sum += item;
//     }
//     return sum;
// }
// let number = pop(array);
// console.log(number);

// const arr = [1,2,3];
// const pop = (array) => {
//     let sum = 0;
//     for (const item of array) {
//         sum += item;
//     }
// }
// let number = pop(arr);
// console.log(number)
//

