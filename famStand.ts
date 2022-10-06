interface Product {
  name: string;
  price: string;
  quantity: number;
}

const productLog = (product: Product) => {
  console.log(product.name)
}
