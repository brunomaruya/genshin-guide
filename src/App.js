import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getCharacterNames } from "./services/characterServices";
import { fetchData } from "./utils/fetchData";
import Search from "./components/Search";
import CharacterCard from "./components/CharacterCard";
import { renderLoadingOrError } from "./services/renderLoadingOrError";
import backgroundImg from "./assets/images/genshin.jpeg";

function App() {
  const [characterNames, setCharacterNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(getCharacterNames, setLoading, setCharacterNames, setError);
  }, []);

  renderLoadingOrError(loading, error);

  return (
    <div className="bg-center min-h-screen w-full px-20 py-8">
      <div className="bg-[url('./assets/images/genshin.jpeg')] bg-cover bg-center fixed h-screen w-full top-0 left-0 z-[-3]"></div>
      <div className="fixed inset-0 bg-black opacity-50 z-[-2]"></div>
      <div className="container  mx-auto max-w-6xl">
        <Search />
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-5">
          {characterNames.map((name) => (
            <CharacterCard key={name} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
