// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = +prompt('введіть число');
//
// if (x !== 0) {
//     console.log('True');
// } else {
//     console.log('False');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//  (в першу, другу, третю или четверту частину години).

// let time = +prompt('Enter the time');
//
// if (time >= 45 && time < 60) {
//     console.log('fourth part');
// }
// else if (time >= 30 && time <45) {
//     console.log('third part');
// }
// else if (time >= 15 && time <30) {
//     console.log('second part');
// }
// else if (time >= 0 && time <15) {
//     console.log('first part');
// }
// else {
//     console.log('error')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('enter the number')
// if (day > 0 && day <= 10 ){
//     console.log('first decade')
// }
// else if (day > 10 && day <= 21){
//     console.log('second decade')
// }
// else if (day > 21 && day <= 31){
//     console.log('third decade')
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let week = prompt('pick a day')
//
//  switch ('1') {
//      case '1':
//          console.log("monday");
//      break;
//
//      case '2':
//         console.log('tuesday');
//         break;
//
//      case '3':
//          console.log('wednesday');
//          break;
//
//      case '4':
//          console.log('thursday');
//          break;
//
//      case '5':
//          console.log('friday');
//          break;
//
//      case '6':
//          console.log('saturday');
//          break;
//
//      case '7':
//          console.log('sunday');
//          break;
//
//      default:
//          console.log('error')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = '10';
let b = 10;

if (a > b){
    console.log(a)
}
else if (b > a) {
    console.log(b)
}
else if (a === b) {
    console.log('equal')
}
else {
    console.log('error')
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let day = +prompt('Enter the number');
// if (day > 0 && day <=10) {
//     console.log('first')
// }
// else if (day > 10 && day <=20) {
//     console.log('second')
// }
// else if (day > 20 && day <=31) {
//     console.log('third')
// }
// else {
//     console.log('Update the page and try again')
// }


// let age = +prompt( 'how old are you ?')
//
// if (age < 18) {
//     document.write('<h1>Cartoon</h1>');
// } else if (age >= 18 && age <90) {
//     document.write('<h1>porn</h1>')
// }else {
//     document.write('<h1>???</h1>')
// }

//  let color = prompt('enter color that you see')
// let roadStatus = confirm('road is clear')
// //or
//    if (color === 'green' || roadStatus  ){
//        console.log('you can go')
//  } else if (color === 'yellow'){
//        console.log('wait')
//  } else if (color === 'red'){
//        console.log('stop')
//  }