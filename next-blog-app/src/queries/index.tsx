export interface IProduct {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: IProductCategory;
  image: string;
  rating: IProductRating;
}

export enum IProductCategory {
  Electronics = "electronics",
  Jewelery = "jewelery",
  MenSClothing = "men's clothing",
  WomenSClothing = "women's clothing",
}

export interface IProductRating {
  rate: number;
  count: number;
}

async function getStaticProps() {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  // console.log(products);

  return products;
}

export async function getData() {
  const products = await getStaticProps();
  // console.log(products);
  return products;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getData,
};
