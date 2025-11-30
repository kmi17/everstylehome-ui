import { useEffect, useState } from "react";
import {get} from "./utils/api"

export default function useSpaceCategories() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await get("/spaces");
        setSpaces(data);
      } catch (err) {
        console.error("Failed to load space categories:", err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { spaces, loading };
}
