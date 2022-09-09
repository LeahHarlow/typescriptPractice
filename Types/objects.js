function printName(person) {
    console.log("".concat(person.first, ", ").concat(person.last));
}
printName({ first: 'Lola', last: 'Dobson' });
//weird example but its possible and highlights the different types of brackets
//the first set of brackets is the typed input object and the second set is the actual input object.
var coordinate = { x: 10, y: 13 };
// this is also super weird but it shows that you can type the expected return from a function to be an object literal as well.
function randoTinyCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
//this is now valid instead of lines above
var coordinateNew = { x: 2, y: 3 };
function randoTinyCoordinateNew() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: 2, y: 3 };
}
// whoever was the brainchild of ts decided that if you pass objects directly into a function if you add any extra arguements from when you typed the functions expected input then you will get an error, BUT if you pass in a variable with extra info you wont get an error bc the function will just scan for what it needs, also you can pass in less arguements apperantly too
//printName({ first: 'Mick', last: 'Jagger', age: 473 });
var singer = { first: 'Mick', last: 'Jagger', age: 473 };
printName(singer);
var goingRate = 0.0033;
//this makes the function much easier to read
function calculateArtistPayout(song) {
    return song.streams * goingRate;
}
function printSongInfo(song) {
    console.log("".concat(song.title, " - ").concat(song.artist, ", ").concat(song.credits.producer));
}
//remember to type variables
var unchainedMelody = {
    title: 'Unchained Melody',
    artist: 'Righteous Brothers',
    streams: 462946367,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
};
printSongInfo(unchainedMelody);
