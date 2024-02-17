import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return json(products);
};
