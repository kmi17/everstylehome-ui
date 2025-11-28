import { useEffect, useState } from "react";
import {get} from "./utils/api"

export default function useBrandCategories() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await get("/brands"); // API returns array
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
