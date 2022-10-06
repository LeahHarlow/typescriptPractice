"use strict";
// tuples are arrays that have a fixed length and fixed order of types.
//for example, maybe you want to set a bunch of colours which should consist of their RGB values
let Colour = [12, 34, 234];
// we can also make an array of arrays all typed by adding [] to the end of the tuple like so:
let responses = [[200, "ok"], [500, "sever error"]];
// anyay thats pretty much the gist and you probably wont use these often
///////////////////////////////// ENUMS
//Enums are a set of named constants for when you want a value to have a limited set of options,
// Ie maybe you want a shipping status to be Processing, Shipped or Delivered.
//Enums can be numbers, strings, or heterogenous
var Answers;
(function (Answers) {
    Answers[Answers["YES"] = 0] = "YES";
    Answers[Answers["NO"] = 1] = "NO";
    Answers[Answers["MAYBE"] = 2] = "MAYBE"; //2
})(Answers || (Answers = {}));
const reply = Answers.YES; //0
// so this all works out and is really nice to read
// you can also change values like so incase you dont want to work with numbers:
var Directions;
(function (Directions) {
    Directions["UP"] = "up";
    Directions["DOWN"] = "down";
    Directions["LEFT"] = "left";
    Directions["RIGHT"] = "right";
})(Directions || (Directions = {}));
const firstMove = Directions.LEFT; // shows "left" on hover
