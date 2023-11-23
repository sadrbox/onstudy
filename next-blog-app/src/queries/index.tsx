export type TProducts = TProduct[];

export interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TProductRating;
}

export interface TProductRating {
  rate: number;
  count: number;
}

async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = (await response.json()) as TProducts;
  return data;
}

export async function getDataProducts() {
  const products = await getStaticProps();
  return products;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataProducts,
};
