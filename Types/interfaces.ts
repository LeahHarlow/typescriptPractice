// interfaces look almost identical to types but they are specifically for objects

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
salePrice: (discount:number) => number;
}

let shoes: Products = {
  name: "Nikes",
  price: 100,
  salePrice(discount: number) {
    let newPrice = this.price * (1-discount);
    this.price = newPrice;
    return this.price;
  }
}

console.log(shoes.salePrice(.3))
