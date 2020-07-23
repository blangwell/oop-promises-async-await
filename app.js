// Object Oriented Programming
// think of it like physical objects in code format

// prototypical Inheritance

const dog = {
    name: 'Michael',
    goodBoy: true,
    gender: 'girl'
};

const dogTwo = {
    name: 'Rocco',
    color: 'brown'
};

dogTwo.__proto__ = dog; // __proto__ inherits from dog

console.log(dog);
console.log(dogTwo);

console.log(dogTwo.goodBoy);

console.log(dogTwo.name);


// Make two objects and one object needs to inherit the other object

const game = {
    title: 'Death Stranding',
    releaseYear: 2019,
    rating: 'M'
};

const gameTwo = {
    title: 'Far Cry 5',
    releaseYear: 2018
};

gameTwo.__proto__ = game;

console.log(gameTwo);
console.log(gameTwo.rating);

game.score = 10;
gameTwo.score = 8.5;

console.log(gameTwo);
console.log(gameTwo.score);


// Constructor Function
function User(name) {
    // this refers to the function
    this.name = name;
}

// new 
let adam = new User('adam');
let pete = new User('pete');

console.log(adam.name);
console.log(pete.name);


// constructor function template
function NBAPlayer(name, team, threePointShooter) {
    // this = {}
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;

    // return this object

}

let steph = new NBAPlayer('steph curry', 'warriors', true);
console.log(steph);
console.log(steph.name);


function videoGames(name, genre, rating, score) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
    this.score = score;
}

let ds3 = new videoGames('Dark Souls 3', 'ARPG', 'M', 9);
console.log(ds3);

let hzd = new videoGames('Horizon Zero Dawn', 'ARPG', 'T', 9);
console.log(hzd);

let fc5 = new videoGames('Farcry 5', 'FPS', 'M', 9);
console.log(fc5);