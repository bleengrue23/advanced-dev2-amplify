import { Category } from "@/API";
import { getAllCategories } from "@/api/categories";
import { useEffect, useState } from "react";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await getAllCategories();
      setCategories(res);
    };
    fetchCategories();
  }, []);

  return { categories };
};
