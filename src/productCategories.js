import { useEffect, useState } from "react";

export default function useProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/data/productCategories.json");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load local JSON:", error);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { categories, loading };
}
