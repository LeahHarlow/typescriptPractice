// tuples are arrays that have a fixed length and fixed order of types.

import { isYieldExpression } from 'typescript';

//for example, maybe you want to set a bunch of colours which should consist of their RGB values

let Colour: [number, number, number] = [12, 34, 234];

// or

type HTTPResponse = [number, string];

let responses: HTTPResponse[] = [[200, "ok"], [500, "sever error"]]

// anyay thats pretty much the gist and you probably wont use these often

//Enums are a set of named constants for when you want a value to have a limited set of options,
// Ie maybe you want a shipping status to be Processing, Shipped or Delivered.
//Enums can be numbers, strings, or heterogenous

enum Answers {
  yes, //0
  no, //1
  maybe //2
}

const reply = Answers.yes;

// so this all works out and is really nice to read


