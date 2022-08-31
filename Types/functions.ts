//annotating functions

function square(num: number) {
  return num * num;
}

function greek(food: string) {
  return 'olives';
}

const friendPotential = (person: string, age: number, isFunny: boolean) => {};

friendPotential('Zuma', 1.5, true); // this works ts will give you exact errors for arguemnts missing tho which is cool.

//providing default values must come after annotation

function whatsForLunch(food: string = 'Burrito') {
  return `We get to have a ${food} for lunch.`;
}

// if you forget to include a return in a function ts wont give you an error it will just say void.
// unless you also type the returned value ie

//named func
function add(num: number): number {
  return num + num;
}

// arrow func
const multiply = (x: number, y: number): number => {
  return x * y;
}

/////anonymous functions


