import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

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

// the ? makes the arg optional
type Point = {
  x: number;
  y: number;
  z?: number;
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

//printName({ first: 'Mick', last: 'Jagger', age: 473 });

const singer = { first: 'Mick', last: 'Jagger', age: 473 };

printName(singer);

// Nested Objects:
// pretend were spotify for a minute

//this is super long so we can separate the arguements out into a type
// function calculateArtistPayout(song: {
//   title: string;
//   artist: string;
//   streams: number;
//   credits: { producer: string; writer: string };
// }) {}

type Song = {
  title: string;
  artist: string;
  streams: number;
  credits: { producer: string; writer: string };
};

let goingRate: number = 0.0033;

//this makes the function much easier to read
function calculateArtistPayout(song: Song): number {
  return song.streams * goingRate;
}

function printSongInfo(song: Song): void {
  console.log(`${song.title} - ${song.artist}, ${song.credits.producer}`);
}

//remember to type variables
let unchainedMelody: Song = {
  title: 'Unchained Melody',
  artist: 'Righteous Brothers',
  streams: 462946367,
  credits: {
    producer: 'Phil Spector',
    writer: 'Alex North',
  },
};

printSongInfo(unchainedMelody);

// you can also use the readonly modifier
type User = {
  readonly id: number;
  userName: string;
};

let newUser: User = {
  id: 123, // I can assign it initially, I have to actually.Reassigning after this initial one will fail though
  userName: 'ZumaBum',
};

//user.id = 12374937 will fail though its not allowed to be reassigned.
// note that number is a primitive type so I cant touch it at all but if it was an object or array I could add to that just not change that its an object or array

// you can also ampersand object types together and you will need both requirements to be met

type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type ColorfulCircle = Circle & Color; // right ova heeya

// so here we need both args now.
const blueDot: ColorfulCircle = {
  radius: 3,
  color: 'Fanny Blue',
};

// you could also add another type with another ampersands on line 115 to add to it but it gets pretty clunky
