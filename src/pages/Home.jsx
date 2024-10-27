import React, { useContext, useEffect, useState } from "react";
import Search from "../components/Search";
import CharacterCard from "../components/CharacterCard";
import { SearchContext } from "../context/SearchContext";
import { getCharacterNames } from "../services/characterServices";
import { fetchData } from "../utils/fetchData";
import { renderLoadingOrError } from "../services/renderLoadingOrError";
import { filterCharacterByName } from "../services/filters";

export default function Home() {
  const [characterNames, setCharacterNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    fetchData(getCharacterNames, setLoading, setCharacterNames, setError);
  }, []);

  renderLoadingOrError(loading, error);
  return (
    <div className="container  mx-auto max-w-6xl">
      <Search />
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-5">
        {!searchTerm &&
          characterNames.map((name) => (
            <CharacterCard key={name} name={name} />
          ))}

        {searchTerm &&
          filterCharacterByName(characterNames, searchTerm).map((name) => (
            <CharacterCard key={name} name={name} />
          ))}
      </div>
    </div>
  );
}
