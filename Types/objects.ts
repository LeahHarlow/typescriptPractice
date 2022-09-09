function printName(person: { first: string; last: string }): void {
  console.log(`${person.first}, ${person.last}`);
}

printName({ first: 'Lola', last: 'Dobson' });

//weird example but its possible and highlights the different types of brackets
//the first set of brackets is the typed input object and the second set is the actual input object.
let coordinate: { x: number; y: number } = { x: 10, y: 13 };

// this is also super weird but it shows that you can type the expected return from a function to be an object literal as well.
function randoTinyCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

//at this point though type aliases can become pretty useful to keep our code drier. Its convention to use capitals. Super helpful for object types

type Point = {
  x: number;
  y: number;
};

//this is now valid instead of lines above
let coordinateNew: Point = { x: 2, y: 3 };

function randoTinyCoordinateNew(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: 2, y: 3 };
}

// whoever was the brainchild of ts decided that if you pass objects directly into a function if you add any extra arguements from when you typed the functions expected input then you will get an error, BUT if you pass in a variable with extra info you wont get an error bc the function will just scan for what it needs, also you can pass in less arguements apperantly too

printName({ first: 'Mick', last: 'Jagger', age: 473 });

const singer = { first: 'Mick', last: 'Jagger', age: 473 };

printName(singer);
