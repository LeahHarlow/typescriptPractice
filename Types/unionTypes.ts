// you can use a single | to join types if you dont know what a type will be at runtime.

//let user: string | number = "Cabo"

const printUser = (user: string | number): void => {
  console.log(`The user is called ${user}`);
};

//both of these are totally cool now
printUser('Cabo');
printUser(247);

// we might want to do some type narrowing though once we do get an input

// typescript is so smart that hovering over price on line 17 || 18 we get both types and on line 20 its only number type
const calculateTax = (price: number | string, tax: number): number => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  }
  return price * tax;
};

//pudding
calculateTax(45, 0.03);
calculateTax('$45', 0.03);

//what if I want to have an array that can hold strings or numbers?
// you coud use any but dont do that. Union those types

let stuff: (number | string)[] = []; // this will make an array that takes number and strings
let otherStuff: number[] | string[]; // this will be an array of ONLY numbers or ONLY strings

// Literals
// maybe you want to make something that CANNOT be changed

let zero: 0 = 0;
//zero = 2 this no worky now. Can only be 0.

//a more useful example, this lets us union types, not ALL strings, but THESE strings.
type DaysOfTheWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

type DayReference = 'Yesterday' | 'Today' | 'Tomorrow';

let day: DayReference | DaysOfTheWeek = "Friday" // this is all good now but can ONLY be one of those types
