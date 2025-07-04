import { useState, useMemo } from "react";
import { Product } from "@/data/products";

export const useProductFilters = (products: Product[]) => {
  const [selectedArea, setSelectedArea] = useState([25]);
  const [selectedBrand, setSelectedBrand] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      const matchesArea =
        parseInt(product.area) >= selectedArea[0] &&
        parseInt(product.area) <= selectedArea[0] + 10;
      return matchesBrand && matchesArea;
    });
  }, [products, selectedBrand, selectedArea]);

  return {
    selectedArea,
    selectedBrand,
    filteredProducts,
    setSelectedArea,
    setSelectedBrand,
  };
};
