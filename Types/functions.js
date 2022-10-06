"use strict";
//annotating functions
function square(num) {
    return num * num;
}
function greek(food) {
    return 'olives';
}
const friendPotential = (person, age, isFunny) => { };
friendPotential('Zuma', 1.5, true); // this works ts will give you exact errors for arguemnts missing tho which is cool.
//providing default values must come after annotation
function whatsForLunch(food = 'Burrito') {
    return `We get to have a ${food} for lunch.`;
}
// if you forget to include a return in a function ts wont give you an error it will just say void.
// unless you also type the returned value ie
// or add the type void to a function if the function is meant to return nothing. It will infer void, but ti will give you an error when your function returns something if you dont want it to. Or use never as a type to make sure a function NEVER stops or returns.
//named func
function add(num) {
    return num + num;
}
// arrow func
const multiply = (x, y) => {
    return x * y;
};
/////anonymous functions
