// let str = 'hello world, lorem ipsum, javascript is cool'
//
// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(str.length);

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
//
// console.log(str.toUpperCase())
//
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//
// console.log(str.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.length)
// let s = str.trim();
// console.log(s)
// console.log(s.length);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '))

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str){
//    return str.split(' ')
// }
// console.log(stringToarray(str))

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let nums = [10,8,-7,55,987,-1011,0,1050,0]
// console.log(nums)



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// // console.log(nums);
// // console.log(nums.reverse());
//
// let nums = [11,21,3];
// function sortNums(nums){
//    return nums.reverse()
// }
// console.log(sortNums(nums))

// - є масив-- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// console.log(coursesAndDurationArray.sort(function (a, b) {
//    return a.monthDuration - b.monthDuration;
// }))

// let filter = coursesAndDurationArray.filter((courses) => courses.monthDuration > 5);
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

// {
//     cardSuit:  'spade', 'diamond','heart', 'clubs'
//         value:  '6'-'10', 'ace','jack','queen','king','joker'
//     color: 'red','black'
// }


// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }