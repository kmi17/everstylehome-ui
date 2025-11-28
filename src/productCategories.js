import { useEffect, useState } from "react";
import {get} from "./utils/api"


export default function useProductCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        // const res = await fetch("/data/productCategories.json");
        const data = await get("/collections"); // API returns array
        //const names = data.map(item => item.name); // extract only 'name'
        console.log("Categories:", data);
        setCategories(data);
      } catch (error) {
        console.error("Failed to load local JSON:", error);
      } finally {
        console.log("in Finally")
        setLoading(false);
      }
    }

    load();
  }, []);

  return { categories, loading };
}
