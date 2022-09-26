// tuples are arrays that have a fixed length and fixed order of types.

//for example, maybe you want to set a bunch of colours which should consist of their RGB values

let Colour: [number, number, number] = [12, 34, 234];

// or

type HTTPResponse = [number, string];

let responses: HTTPResponse[] = [[200, "ok"], [500, "sever error"]]
