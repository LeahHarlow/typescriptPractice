// arrays are basically the same typeing wise but you add a [] after it.

let faveSongs: string[] = [];
faveSongs.push('Sway');

let luckyNums: number[] = [];
luckyNums.push(7);

// another fancy pancy syntax is this:

let booleans: Array<boolean> = [];
// same as let booleans: boolean[] =[];

//custom types work too they dont have to be primitive types
type Point = {
  x: number;
  y: number;
  z?: number;
};

const coordinates: Point[] = [];

coordinates.push({ x: 3, y: 2 });
