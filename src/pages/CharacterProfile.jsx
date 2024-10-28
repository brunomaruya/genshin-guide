import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/fetchData";
import { getCharacter } from "../services/characterServices";
import { renderLoadingOrError } from "../services/renderLoadingOrError";

export default function CharacterProfile() {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchData(() => getCharacter(id), setLoading, setCharacter, setError);
  }, []);
  renderLoadingOrError(loading, error);

  if (!character) return null;

  const Vision = () => {
    return (
      <img
        className="inline h-10 w-10"
        src={`https://genshin.jmp.blue/elements/${character.vision.toLowerCase()}/icon`}
      />
    );
  };

  return (
    <main className="w-full min-h-screen pt-1 text-white bg-[#2D3037] overflow-hidden relative">
      <div className="flex mt-32 bg-[#1D2025] rounded-t-3xl p-10 relative z-10">
        <div
          className={`absolute inset-0 opacity-10 bg-[url('https://genshin.jmp.blue/nations/${character.nation.toLowerCase()}/icon')] bg-center bg-no-repeat grayscale`}
        ></div>
        <div>
          <div className="text-sm text-gray-400">Name</div>
          <div className="text-xl">
            {character.name}
            {Vision()}
          </div>
          <div className="text-sm text-gray-400">Nation</div>
          <div className="text-xl">{character.nation}</div>
          <div className="text-sm text-gray-400">Weapon</div>
          <div className="text-xl">{character.weapon}</div>
          <div className="text-sm text-gray-400">Constellation</div>
          <div className="text-xl">{character.constellation}</div>
        </div>

        <img
          className="mt-[-150px] max-w-[350px] ml-10 absolute right-[-100px]"
          src={`https://genshin.jmp.blue/characters/${id}/portrait`}
        />
      </div>
    </main>
  );
}
