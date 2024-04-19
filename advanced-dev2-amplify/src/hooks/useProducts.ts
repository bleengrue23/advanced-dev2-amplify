import { Product } from "@/API";
import { getAllProducts } from "@/api/products";
import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await getAllProducts();
      setProducts(res);
    };
    fetchProducts();
  }, []);

  return { products };
};
