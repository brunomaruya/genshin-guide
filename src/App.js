import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getCharacterNames } from "./services/characterServices";
import { fetchData } from "./utils/fetchData";
import Search from "./components/Search";
import CharacterCard from "./components/CharacterCard";
import { renderLoadingOrError } from "./services/renderLoadingOrError";

function App() {
  const [characterNames, setCharacterNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(getCharacterNames, setLoading, setCharacterNames, setError);
  }, []);

  renderLoadingOrError(loading, error);

  return (
    <div className="bg-background min-h-screen px-10 py-8">
      <Search />
      <div className="grid grid-cols-4 gap-4 mt-5">
        {characterNames.map((name) => (
          <CharacterCard key={name} name={name} />
        ))}
      </div>
    </div>
  );
}
export default App;
