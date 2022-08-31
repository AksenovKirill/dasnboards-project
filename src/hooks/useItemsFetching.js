import { useState } from "react";
import axios from "axios";
import { testUrl } from "../assets/const";
export const createAPI = () => axios.create();
const api = createAPI();

export const useItemsFetching = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = async () => {
    setIsLoading(true);
    api.get(testUrl).then(async (res) => {
      const { data } = res;
      const adaptItems = Object.entries(data).map(([key, value]) => {
        const { id, name, priority, moysklad_id, virtual_moysklad_id } = value;

        return {
          id,
          name,
          typeW: "warehouse",
          typeD: "drop",
          priority,
          moySkladId: moysklad_id,
          virtualId: virtual_moysklad_id,
        };
      });
      await setItems(adaptItems);
      setIsLoading(false);
    });
  };
  return {
    fetchItems,
    data: items.slice(0, 10),
    isLoading,
  };
};

export default useItemsFetching;
