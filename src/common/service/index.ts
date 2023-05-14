import { Dictionary } from "../interfaces/dictionary";
import apiFetcher from "../utils/apiFetch";

export const getDictionary = async (param: string) => {
  const { data } = await apiFetcher<Array<Dictionary>>({
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`,
  });

  return data;
};
