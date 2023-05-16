import { useState, useEffect } from "react";
import useLoadWordDefinition from "./common/useCases/useLoadWordDefinition";
import useDebounce from "./common/hooks/useDebounce";
import WordDefinitionList from "./common/components/wordList";

export default function App() {
  const [word, setWord] = useState("");

  const { data, loading, error, loadWordDefinition } = useLoadWordDefinition();

  const inputValue = useDebounce(word, 500);

  useEffect(() => {
    !!inputValue && loadWordDefinition(inputValue);
  }, [inputValue, loadWordDefinition]);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={(e) => setWord(e.target.value)} />

      {loading && <div>Loading....</div>}
      {error && !loading && <div>Word not found...</div>}
      {data && !loading && !error && (
        <div>{<WordDefinitionList wordDefinition={data} />}</div>
      )}
    </div>
  );
}
