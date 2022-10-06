// interfaces look almost identical to types but they are specifically for objects
//interfaces can ONLY descibe object shapes.
//We can also add on to or extend itnerfaces later in the code or in different files. We cant duplicate objects though.
//You can also extend multiple interfaces into a new one where as types need unions with && to do that.


// notice theres no = before the {} like in types
interface NewPoint {
  x: Number;
  y: number;
}

const pt: NewPoint = { x: 12, y: 13 };

// optionals and read onlys work the same too
// but notice the functions notation

interface CelebCrush {
  first: string;
  readonly last: string;
  nickname?: string;
  //this shows that theres a function that takes no args and returns a string
  sayHi: () => string;
  //sayHi(): string; works too
}

const futureHusband: CelebCrush = {
  first: 'Thomas',
  last: 'Hardy',
  //notice this has to be a funtion not a string
  sayHi: () => {
    return 'Ello There';
  },
};

futureHusband.first = 'Tom';

// another example for where you might accept an arg

interface Products {
  name: string;
  price: number;
  salePrice: (discount: number) => number;
}

// multiple declarations of the same interface will just add required elements rather than override them
// Its basically simple class inheritance

interface Products {
  serialNumber: number;
}

let shoes: Products = {
  name: 'Nikes',
  price: 100,
  salePrice(discount: number) {
    let newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
  serialNumber: 1249385,
};

console.log(shoes.salePrice(0.3));

// we can extend interfaces as well
// they will have all the valued of the interface thewy extend plus new ones you add under a different name now. you do HAVE to include all the values of both interfaces or will get an error;

interface returnedProducts extends Products {
  returned: boolean;
  defective: boolean;
}

let returnedShoes: returnedProducts = {
  name: 'Nikes',
  price: 100,
  serialNumber: 1249385,
  salePrice(discount: number) {
    let newPrice = this.price * (1 - discount);
    this.price = newPrice;
    return this.price;
  },
  returned: true,
  defective: false
};

// you can also extend multiple interfaces together
// interface blahblah extends this,andThat {}
