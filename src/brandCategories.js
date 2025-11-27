import { useEffect, useState } from "react";

export default function useBrandCategories() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/data/brandCategories.json");
        const data = await res.json();
        setBrands(data);
      } catch (err) {
        console.error("Failed to load brand categories:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { brands, loading };
}
