// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore = 10;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var schtuff = ['3', 3];
var colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name) {
    if (typeof name === 'string') {
        console.log("Hello ".concat(name));
    }
    else {
        name.forEach(function (name) { return console.log("Hello ".concat(name)); });
    }
}
greet('Zuma');
greet(['Aria', 'Doggo']);
