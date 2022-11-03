// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let cats = ['abyssinian', 126600, 'bengal', 'mainecoon', true, 'oriental', 100500, 'savannah', 606006, false]
console.log(cats)
console.log(cats[4])
console.log(cats[9])
console.log(cats[0])
console.log(cats[3])
console.log(cats[1])
console.log(cats[2])
console.log(cats[7])
console.log(cats[5])
console.log(cats[6])
console.log(cats[8])

// - Створити 3 об'єкти які описують книги.Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'a Dance with Dragons',
    pageCount: 1020,
    genre: 'fantasy'
}
console.log(book1)

let book2 = {
    title: 'Blood of Elves',
    pageCount: 320,
    genre: 'fantasy'
}
console.log(book2)

let book3 = {
    title: 'a Clockwork Orange',
    pageCount: 170,
    genre: 'satire, black comedy'
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age

let bookA = {
    title: 'a Dance with Dragons',
    pageCount: 1020,
    genre: 'fantasy',
    author: {
        name: 'George Raymond Richard Martin',
        age: 74
    }
}
console.log(bookA)

let bookB = {
    title: 'Blood of Elves',
    pageCount: 320,
    genre: 'fantasy',
    author: {
        name: 'Andrzej Sapkowski',
        age: 74
    }
}
console.log(bookB)

let bookC = {
    title: 'a Clockwork Orange',
    pageCount: 170,
    genre: ['satire', 'black comedy'],
    author: {
        name: 'Anthony Burgess',
        age: 'died in 1993, aged 76'
    }
}
console.log(bookC)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача


let users = [
    {name: 'Rhaenyra Targaryen', username: 'princess', password: 987611100},
    {name: 'Viserys Targaryen', username: 'king', password: 445560811},
    {name: 'Daemon Targaryen', username: 'prince', password: 111133388},
    {name: 'Otto Hightower', username: 'ser1', password: 842524224},
    {name: 'Criston Cole', username: 'ser2', password: 222200999},
    {name: 'Lyonel Strong', username: 'lord', password: 787878787},
    {name: 'Jason Lanister', username: 'ser3', password: 10909560811},
    {name: 'Leana Velaryon', username: 'lady', password: 6779877651},
    {name: 'Lucerys Velaryon', username: 'luke', password: 555555688},
    {name: 'Phaenys Targaryen', username: 'princess2', password: 42222222670}
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)