import React, { useContext } from "react";
import { setStorage } from "../fakeDB/localStorage";
import Product from "./Product";
import { CartContext, ProductsContext } from "./Root/Root";

const Shop = () => {
  const products = useContext(ProductsContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter((item) => item.id !== product.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    setStorage(product.id);
  };

  return (
    <div className="dark:bg-gray-900 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
