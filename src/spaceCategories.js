import { useEffect, useState } from "react";

export default function useSpaceCategories() {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/data/spaceCategories.json");
        const data = await res.json();
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
