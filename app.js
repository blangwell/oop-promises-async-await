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
    this.intro = function() {
        console.log('hi my name is ' + this.name);
    }
    // return this object

};

let steph = new NBAPlayer('steph curry', 'warriors', true);
console.log(steph);
console.log(steph.name);

function videoGames(name, genre, rating, score) {
    this.name = name;
    this.genre = genre;
    this.rating = rating;
    this.score = score;
    this.breakdown = function() {
        console.log('I rate ' + this.name + ' ' + score + ' out of 10');
    }
}

let ds3 = new videoGames('Dark Souls 3', 'ARPG', 'M', 9);
console.log(ds3);

let hzd = new videoGames('Horizon Zero Dawn', 'ARPG', 'T', 9);
console.log(hzd);

let fc5 = new videoGames('Farcry 5', 'FPS', 'M', 9);
console.log(fc5);

steph.intro();
ds3.breakdown();

// class 
class Car {
    // constructor is what is passed into class
    // constructor function
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive() {
        console.log(this.make + ' go vroooom');
    }
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}

let tesla = new Car('2020', 'Tesla', 'Model 1', 'Black');

tesla.drive();
tesla.intro();



class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    
    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`) // backtick string to include javscript
    }
} // convention indicates no semicolon after class definition

// make my own class out of
// muh github api
// https://api.github.com/users/blangwell
fetch('https://api.github.com/users/blangwell') //pass in url as a string
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    let githubUrl = data.url; 
    console.log(githubUrl);
    let githubUserName = data.login;
    console.log(githubUserName);
    let githubName = data.name;
    console.log(githubName);

    const barent = new GithubProfile(githubUserName, githubName, githubUrl);
    console.log(barent);

    barent.intro();
})

fetch('https://api.github.com/users/Lizzwest')
.then(response => {
    return response.json();
})
.then(data => {
    const lizz = new GithubProfile(data.login, data.login, data.url);
    console.log(lizz);
})