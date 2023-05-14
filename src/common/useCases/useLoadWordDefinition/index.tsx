import { useState, useCallback } from "react";
import { getDictionary } from "../../service";

const useLoadWordDefinition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const loadWordDefinition = useCallback(async (param: string) => {
    setLoading(true);
    getDictionary(param)
      .then((response) => {
        setData(response);
        setError(null);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error, loadWordDefinition };
};

export default useLoadWordDefinition;
