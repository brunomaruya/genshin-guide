import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { getCharacter } from "../services/characterServices";
import { renderLoadingOrError } from "../services/renderLoadingOrError";
import clorinde from "../assets/images/clorinde";
import sethos from "../assets/images/sethos";
import sigewinne from "../assets/images/sigewinne";

export default function CharacterCard({ name }) {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const goldBg = "bg-[#A27D57]";
  const purpleBg = "bg-[#A07BB5]";

  useEffect(() => {
    fetchData(() => getCharacter(name), setLoading, setCharacter, setError);
  }, []);
  renderLoadingOrError(loading, error);
  let card;

  switch (name) {
    case "clorinde":
      card = clorinde;
      break;
    case "sethos":
      card = sethos;
      break;
    case "sigewinne":
      card = sigewinne;
      break;
    default:
      card = `https://genshin.jmp.blue/characters/${name}/card`;
  }
  if (character)
    return (
      <div className=" rounded-3xl h-fit  object-cover overflow-hidden bg-black p-2 relative">
        <div
          className={`${
            character?.rarity === 5 ? goldBg : purpleBg
          } rounded-2xl flex justify-center overflow-hidden`}
        >
          <img
            src={card}
            alt={character?.name}
            className="transform scale-125 max-h-52"
          />
        </div>
        <div className="text-white text-center  mt-2">{character?.name}</div>
        <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center absolute top-0 right-0">
          <img
            src={`https://genshin.jmp.blue/elements/${character?.vision.toLowerCase()}/icon`}
            alt={character?.element}
          />
        </div>
      </div>
    );
}
