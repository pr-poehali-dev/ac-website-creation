import { useState } from "react";
import { Product } from "@/data/products";

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [compareItems, setCompareItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const toggleCompare = (product: Product) => {
    setCompareItems((prev) =>
      prev.find((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    );
  };

  return {
    cartItems,
    compareItems,
    addToCart,
    toggleCompare,
  };
};
