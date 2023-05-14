export const getDictionary = async (param: string) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
  );

  if (response.ok) return response.json();

  throw new Error("Error");
};
