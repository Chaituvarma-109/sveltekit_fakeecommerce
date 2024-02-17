import type { PageLoad } from "../../$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const id = params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return { product };
};
