let chuVaki = [
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
    return user.filter( fr => fr.friends === friendo)
}

console.log(chuVaki, 'Briana Decker')

let sortName = chuVaki
.sort((a,b) => (b.friends).length - (a.friends).length)
.map(val => val.name)
console.log(sortName)



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


