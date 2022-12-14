import { getStorage } from "../fakeDB/localStorage";

export const loadersData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const storedCart = getStorage();
  let initialCart = [];
  for (const id in storedCart) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = storedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};
