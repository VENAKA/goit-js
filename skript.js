/* let chuVaki = [
    {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
    },
    {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
    },
    {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
    },
    {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
    },
    {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
    },
    {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
    },
    {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
    },
    ];

let ludi =  chuVaki.map(ludi => ludi.name)
console.log(ludi)

function getEyeColor(user, color){  
    return  user.filter(eye => eye.eyeColor === color)
}
console.log(getEyeColor(chuVaki, 'blue'))

function getGender(user, gender){
    return user.filter(gen => gen.gender === gender).map(nam => nam.name)
}
console.log(getGender(chuVaki, 'female'))

function getOnline(user, online){
    return user.filter(on => on.isActive === online)
}
console.log(getOnline(chuVaki, false))

function getE_male(user, e_male){
    return user.find(em => em.email === e_male)
}
console.log(getE_male(chuVaki,'shereeanthony@kog.com'))

function sortByAge(user, min, max){
    return user.filter(years => years.age > min && years.age < max)
}
console.log(sortByAge(chuVaki, 25, 40))

let sum = 0
chuVaki.forEach(user => {
    sum += user.balance
})
console.log(sum)

function getByFriend(user , friendo){
    return user.filter( fr => fr.friends === friendo).map(val => val.name)
}

console.log(chuVaki, 'Briana Decker')

let sortName = chuVaki
.sort((a,b) => (b.friends).length - (a.friends).length)
.map(val => val.name)
console.log(sortName) */



/* let players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
    ] */


/* 
    let playersTime = players.reduce((sum,hor) => sum + hor.timePlayed,0)
    console.log(playersTime) */
/* 
    let imena = ['Alex','Vena','Gleb','Greg','Taras','vlad']
    let arrName = players.sort((a,b) => a.localeCompare(b)) */


/*     let arry = [,456,6,7,34,6,65,3,79,100,86,34]

    let sum = arry
    .filter(val => val % 2 !== 0 )
    .map(lol => lol * 2)
    console.log(sum)
 */

/*     const numbers = [1, 2, 3, 4, 5];

    let sum = numbers.reduce((a,b) => (a + b)/5,0)
    console.log(sum) */

/*     let items = [
        { name: 'Item A', popularity: 5 },
        { name: 'Item C', popularity: 2 },
        { name: 'Item D', popularity: 3 },
        { name: 'Item B', popularity: 5 }
        ]

        let popul = items.sort((a,b) => {
            if(b.popularity === a.popularity){
                return b.name - a.name
            }
            return b.popularity - a.popularity
        })
        console.log(popul) */


/* let one = 1
let two = 2
let thre = 3
let fhor = 4
let getSum = (one,two,thre,fhor ) => {
    return one + two + thre + fhor
}
console.log(getSum(one,two,thre,fhor )) */



/* 
let animal = {
    name:'Semen'
}
let pes = {
    name:'Anton'
}
let cat = Object.create(animal)
cat.paroda = 'dvornaga'
console.log(cat)
console.log(animal.isPrototypeOf(pes)) */

/* class Name {
    constructor(firstname,surename){
        this.firstname = firstname
        this.surename = surename
    }
}
let student = new Name('kurva','cech')
console.log(student) */
/* 
class Rectangle{
    constructor(width,height){
        this.width = width,
        this.height = height
    }
    getArea(){
        return this.width * this.height
    }
} 
let triangle = new Rectangle(100 , 200)
let triangle2 = new Rectangle(8745, 8)
console.log(triangle2.getArea())
console.log(triangle.getArea()) */

/* class Book{
    constructor( title,  author, price ){
        this.title = title
        this.author = author
        this.price = price
    }
}
class Bookstore{
    constructor(){
        this.books = []
    }
    addBook(book){
        this.books.push(book)
    }
    removeBook(book){
        this.books.
    }
} */

/* 
class Peaple {
    constructor(name,age){
        this.name = name
        this.age = age
    }
}
class Person extends Peaple {
    constructor(name,etnisiti){
        super(name) 
        this.etnisiti = etnisiti
    }   
    addciti(etnisiti){
        this.etnisiti.push(etnisiti)
    }
}
let getPerson = new Person('antosha','Ucrainish')
console.log(getPerson.addciti('Ucrainish')) */

/* 
class Animal{
    constructor(name){
        this.name = name
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name)
        this.breed = breed
    }
}
let myDog = new Dog('Buddy',' Labrador Retriever')
console.log(myDog) */


/* class User {
    constructor(name,age,followers){
        this.name = name
        this.age = age
        this.followers = followers
    }
    getInfo(){
        return `user ${this.name} age ${this.age} folowers ${this.followers}`
    }
}
let person = new User('Antosha', 20 , 2000)
console.log(person.getInfo()) */
/* 
class Storage{
    constructor(){
        this.items = []
    }
    addItem(item){
        this.items.push(item)
    }
    removeItem(item){
        this.items = this.items.filter(elem => elem !== item)
    }
    getItems(){
        return this.items
    }
}
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
    ]);
    
    const items = storage.getItems();
    storage.addItem('Дроїд' );
    storage.addItem('Нанітоіди')
    console.table(storage.items); 

     */

/*     let titleName = document.createElement('h2')
    titleName.textContent = 'Привіт, це перший мій створений елемент!' 
    titleName.className = 'title'
    
    console.log(titleName)
    document.body.append(titleName) */
/* 
    const colorPickerOptions = [
        { label: 'red', color: '#F44336' },
        { label: 'green', color: '#4CAF50' },
        { label: 'blue', color: '#2196F3' },
        { label: 'grey', color: '#607D8B' },
        { label: 'pink', color: '#E91E63' },
        { label: 'indigo', color: '#3F51B5' },
        ];

        let dev = document.querySelector('.js-color-picker')
        for(let i = 0; i < colorPickerOptions.length; i++){
            let button__1 = document.createElement('button')
            button__1.textContent = colorPickerOptions[i].label
            button__1.style.backgroundColor = colorPickerOptions[i].color
            dev.appendChild(button__1)
        }
 */
        /* let porodyct = document.querySelector('.js-products') запуск самого прототипа 
        let cartochka = function(title,info,price){  запуск функції cartochka с аргументами title, info, price
            let cartCon = document.createElement('article') запуск контейнера 
            cartCon.className = 'cart' додавання класу 
            let cartTitle = document.createElement('h2')запуск заголовка - назви магазина 
            cartTitle.className = 'cart__title' додавання класу 
            cartTitle.textContent = title  даємо значення аргумента  
            let cartInfo = document.createElement('p') запуск інформації про картку 
            cartInfo.className = 'cart__info' додавання класу 
            cartInfo.textContent = info  даємо значення аргумента  
            let cartPrice = document.createElement('p') запуск ціни картки 
            cartPrice.className = 'cart__price' додавання класу 
            cartPrice.textContent = price даємо значення аргумента  
            cartCon.appendChild(cartTitle) створення цієї зміної в контейнері 
            cartCon.appendChild(cartInfo) створення цієї зміної в контейнері 
            cartCon.appendChild(cartPrice) створення цієї зміної в контейнері 
            return cartCon  повернення контейнера 
        }
        
        let choto = cartochka('Silpo','це магазин Сільпо тут могла бути ваша реклама',74)  запуск зміної яка дорівнює функції 
        porodyct.appendChild(choto)/* додавоння картки 
        let chotoTwo = cartochka('ATB','це магазин АТБ тут могла бути ваша реклама',100) запуск зміної яка дорівнює функції 
        porodyct.appendChild(chotoTwo) додавоння картки 
        let chtotothree = cartochka('Zym', 'це магазин Цум тут могла бути ваша реклама',65) запуск зміної яка дорівнює функції 
        porodyct.appendChild(chtotothree) додавоння картки  */

/*         let images = ['https://images.pexels.com/photos/16053278/pexels-photo-16053278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
            'https://images.pexels.com/photos/13733057/pexels-photo-13733057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',    
            'https://images.pexels.com/photos/15851469/pexels-photo-15851469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
            ]


            let gallery = document.getElementById('gallery')
            let imggallery = function(img){
                let con = document.createElement('li')
                con.className = 'con'
                let photo = images.forEach(elem => elem === img){
                }   
                con.appendChild(' photo')
            }
         */

/*             let ingredients = [
                'Картопля',
                'Гриби',
                'Часник',
                'Помідори',
                'Зелень',
                'Приправи',
                ];
                ingredients.forEach(ingredient => {
                    let li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);} */




                    let images = [
                        {
                        url:
                        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        alt: 'White and Black Long Fur Cat',
                        },
                        {
                        url:
                        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
                        },
                        {
                        url:
                        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                        alt: 'Group of Horses Running',
                        },
                    ];



let gallery = document.getElementById('gallery')

for(let i = 0; i < images.length; i++){
    let createImg = document.createElement('img')
    createImg.src = images[i].url
    gallery.appendChild(createImg)
}


/* function imgGallery(li,img){
    let liCreator = document.createElement('li')
    let imgCreator = document.createElement('img')
    images.forEach()
    liCreator.appendChild(imgCreator)
    
} */
/* 
    let countvalue = 0

let spanValue = document.getElementById('value')
let plasBtn = document.querySelector('.plas')
let minusBtn = document.querySelector('.minus')
function plas(){
countvalue += 1
updateCount()
}
function minus(){
countvalue -= 1
updateCount()
}
function updateCount(){
spanValue.textContent = countvalue
}
plasBtn.addEventListener('click', plas)
minusBtn.addEventListener('click',minus) */

