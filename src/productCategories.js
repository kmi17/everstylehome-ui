import { useEffect, useState } from "react";
import {get} from "./utils/api"

export default function useProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // const res = await fetch("/data/productCategories.json");
        const res = await get("/collections")
        const dataArray = Array.isArray(res) ? res : res.collections;

        const names = dataArray.map((item) => item.name);
        console.log("Categories:", names);
        setCategories(names);
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
