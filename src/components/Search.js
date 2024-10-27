import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Search() {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="flex gap-2 items-center text-white ">
      <input
        type="search"
        placeholder="Search..."
        className="w-full p-2 rounded-xl text-black "
        value={searchTerm}
        onChange={(e) => handleOnChange(e)}
      />

      <FunnelIcon className="h-8 w-8" />
    </div>
  );
}
