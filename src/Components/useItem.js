import { useEffect, useState } from "react";
import Data from "../data.json";

export function useItem(itemName) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const data = Data;

    const itemData = data.find(
      (d) => d.slug.split(" ").join("-").toLowerCase() === itemName.split(" ").join("-").toLowerCase()
    );

    if (itemData) {
      setItem(itemData);
      // console.log(itemData);
    } else {
      console.error(`Item not found for slug: ${itemName}`);
    }
  }, [itemName]);

  return [item];
}
