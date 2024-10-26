import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { getCharacterNames } from "./services/characterServices";
import { fetchData } from "./utils/fetchData";
import Search from "./components/Search";

function App() {
  const [characterNames, setCharacterNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(getCharacterNames, setLoading, setCharacterNames, setError);
  }, []);

  if (loading) return "Loading...";

  if (error) return error;

  return (
    <div className="bg-background min-h-screen px-10 py-8">
      <Search />
    </div>
  );
}
export default App;
