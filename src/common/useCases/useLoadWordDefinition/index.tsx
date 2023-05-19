import { useState, useCallback } from "react";
import { getDictionary } from "../../service";
import { Dictionary } from "../../interfaces/dictionary";

const useLoadWordDefinition = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Array<Dictionary>>([]);

  const loadWordDefinition = useCallback((param: string) => {
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
