// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User(id, name, surname , email, phone) {
// this.id = id;
// this.name = name;
// this.surname = surname;
// this.email = email;
// this.phone = phone;
// }
//
// console.log(new User('002', 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000));

// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id,name) {
//     this.id = id;
//     this.name = name;
// }
// const user1 = (new User(1,'Kateryna'));
// const user2 = (new User(2,'Kateryna'));
// const user3 = (new User(3,'Kateryna'));
// const user4 = (new User(4,'Kateryna'));
// const user5 = (new User(5,'Kateryna'));
// const user6 = (new User(6,'Kateryna'));
// const user7 = (new User(7,'Kateryna'));
// const user8 = (new User(8,'Kateryna'));
// const user9 = (new User(9,'Kateryna'));
// const user10 = (new User(10,'Kateryna'));
//
// const users = [];
// users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = users.filter(value => value.id % 2 === 0 );
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = users.sort((a, b) => b.id - a.id)
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// const user1 = new Client(1, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 10 )
// const user2 = new Client(2, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 44 )
// const user3 = new Client(3, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 13 )
// const user4 = new Client(4, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 22 )
// const user5 = new Client(5, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 14 )
// const user6 = new Client(6, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 21)
// const user7 = new Client(7, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 19 )
// const user8 = new Client(8, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 1 )
// const user9 = new Client(9, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 3 )
// const user10 = new Client(10, 'Kateryna', 'Tymchuk', 'kat@gmail.com', +38095000000, 9 )

// створити пустий масив, наповнити його 10 об'єктами Client
// const users = [];
// console.log(users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(users.sort((a, b) => a.order - b.order));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, changeYear, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.changeYear = changeYear;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//
// this.engineVolume = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = newSpeed;
// }
//
// this.info = function () {
//     for (const item in this) {
//         if (typeof this[item] !== 'function' ){
//             console.log(`${item} --- ${this[item]}`)
//         }
//     }
// }
//
// this.changeYear = function (newValue) {
//     this.year = newValue;
// }
//
// this.addDriver = function (driver) {
//     this.driver = driver;
// }
// }
// const car = new Car ('MINI Cooper', 'Britan', 2020, 260, 2)
// console.log(car)
//
// car.engineVolume();
// car.increaseMaxSpeed(90);
// car.changeYear(2020);
// car.addDriver ( 'Kateryna');
// console.log(car);
// car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model,producer,year,maxSpeed,carEngine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.carEngine = carEngine;
//     }
//
//
//     engineVolume () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//
//     info () {
//         for (const item in this) {
//             console.log(`${item} --- ${this[item]}`)
//         }
//     }
//
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('MINI Cooper', 'Britan', 2020, 260, 2);
// console.log(car);
//
// car.engineVolume();
// car.increaseMaxSpeed(90);
// car.changeYear(2020);
// car.addDriver ('Kateryna');
// console.log(car);
// car.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
//
// const cinderella1 = new Cinderella('Kateryna',21,39);
// const cinderella2 = new Cinderella('Alena',46,36);
// const cinderella3 = new Cinderella('Sofia',12,38);
//
// const arrayCinderella = [];
// arrayCinderella.push(cinderella1,cinderella2, cinderella3)
// console.log(arrayCinderella)
//
// class Prince extends Cinderella {
//     constructor(name, age, footSize) {
//         super(name, age, footSize);
//     }
// }
//
// const prince1 = new Prince('Danylo Pupkin',33,39);
// console.log(prince1);
//
// for (const item of arrayCinderella) {
//     if (item.footSize === prince1.footSize) {
//         console.log(item);
//     }
// }
//
// let finded = arrayCinderella.find((item => item.footSize === prince1.footSize));
// console.log(finded);