interface FarmProduct {
  name: string;
  price: string;
  quantity: number;
}

const productLog = (product: FarmProduct) => {
  console.log(product.name, product.price)
}
