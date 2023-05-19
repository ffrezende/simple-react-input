import { Dictionary } from "../../interfaces/dictionary";

interface Props {
  wordDefinition: Array<Dictionary>;
}

const WordDefinitionList = ({ wordDefinition }: Props) => {
  return (
    <div>
      {wordDefinition &&
        wordDefinition.map((word, index) => {
          return (
            <div key={index}>
              {word?.meanings[0]?.definitions[0].definition}
            </div>
          );
        })}
    </div>
  );
};

export default WordDefinitionList;
