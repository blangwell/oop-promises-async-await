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