import { SERVICE_URL } from "../constants";
import { Dictionary } from "../interfaces/dictionary";
import apiFetcher from "../utils/apiFetch";

export const getDictionary = async (param: string) => {
  const { data } = await apiFetcher<Array<Dictionary>>({
    url: `${SERVICE_URL.dictionaryapi}entries/en/${param}`,
  });

  return data;
};
