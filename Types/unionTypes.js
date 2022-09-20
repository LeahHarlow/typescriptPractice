// you can use a single | to join types if you dont know what a type will be at runtime.
//let user: string | number = "Cabo"
var printUser = function (user) {
    console.log("The user is called ".concat(user));
};
//both of these are totally cool now
printUser('Cabo');
printUser(247);
// we might want to do some type narrowing though once we do get an input
// typescript is so smart that hovering over price on line 17 || 18 we get both types and on line 20 its only number type
var calculateTax = function (price, tax) {
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
var stuff = []; // this will make an array that takes number and strings
var otherStuff; // this will be an array of ONLY numbers or ONLY strings
// Literals
// maybe you want to make something that CANNOT be changed
var zero = 0;
var day = "Friday"; // this is all good now but can ONLY be one of those types
