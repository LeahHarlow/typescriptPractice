// interfaces look almost identical to types but they are specifically for objects
var pt = { x: 12, y: 13 };
var futureHusband = {
    first: 'Thomas',
    last: 'Hardy',
    //notice this has to be a funtion not a string
    sayHi: function () {
        return 'Ello There';
    }
};
futureHusband.first = 'Tom';
var shoes = {
    name: "Nikes",
    price: 100,
    salePrice: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return this.price;
    }
};
console.log(shoes.salePrice(.3));
