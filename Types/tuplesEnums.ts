// tuples are arrays that have a fixed length and fixed order of types.
//for example, maybe you want to set a bunch of colours which should consist of their RGB values

let Colour: [number, number, number] = [12, 34, 234];

// or

type HTTPResponse = [number, string];

// we can also make an array of arrays all typed by adding [] to the end of the tuple like so:
let responses: HTTPResponse[] = [[200, "ok"], [500, "sever error"]]

// anyay thats pretty much the gist and you probably wont use these often

///////////////////////////////// ENUMS

//Enums are a set of named constants for when you want a value to have a limited set of options,
// Ie maybe you want a shipping status to be Processing, Shipped or Delivered.
//Enums can be numbers, strings, or heterogenous

enum Answers {
  YES, //0
  NO, //1
  MAYBE //2
}

const reply = Answers.YES;//0

// so this all works out and is really nice to read
// you can also change values like so incase you dont want to work with numbers:

enum Directions {
  UP = 'up', //would normally defualt to 0 here
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
}

const firstMove = Directions.LEFT // shows "left" on hover

// good to note though that if you type enums like how they are above you will get a whole lot more js in your compiled file,
//If you make in a const you will just have an object though, so do that.

const enum TrafficLights {
  RED,
  YELLOW,
  GREEN
}
