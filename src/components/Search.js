import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function Search() {
  return (
    <div className="flex gap-2 items-center text-white">
      <input
        type="search"
        placeholder="Search..."
        className="w-full p-2 rounded-xl text-black"
      />
      <FunnelIcon className="h-8 w-8" />
    </div>
  );
}
