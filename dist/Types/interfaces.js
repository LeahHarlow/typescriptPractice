"use strict";
// interfaces look almost identical to types but they are specifically for objects
//interfaces can ONLY descibe object shapes.
//We can also add on to or extend itnerfaces later in the code or in different files. We cant duplicate objects though.
//You can also extend multiple interfaces into a new one where as types need unions with && to do that.
const pt = { x: 12, y: 13 };
const futureHusband = {
    first: 'Thomas',
    last: 'Hardy',
    //notice this has to be a funtion not a string
    sayHi: () => {
        return 'Ello There';
    },
};
futureHusband.first = 'Tom';
let shoes = {
    name: 'Nikes',
    price: 100,
    salePrice(discount) {
        let newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
    serialNumber: 1249385,
};
console.log(shoes.salePrice(0.3));
let returnedShoes = {
    name: 'Nikes',
    price: 100,
    serialNumber: 1249385,
    salePrice(discount) {
        let newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    },
    returned: true,
    defective: false
};
// you can also extend multiple interfaces together
// interface blahblah extends this,andThat {}
