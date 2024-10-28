import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { getCharacter } from "../services/characterServices";
import { renderLoadingOrError } from "../services/renderLoadingOrError";
import clorinde from "../assets/images/clorinde.webp";
import sethos from "../assets/images/sethos.webp";
import sigewinne from "../assets/images/sigewinne.webp";
import { Link } from "react-router-dom";

export default function CharacterCard({ name }) {
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [card, setCard] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const goldBg = "bg-[#A27D57]";
  const purpleBg = "bg-[#A07BB5]";

  useEffect(() => {
    fetchData(() => getCharacter(name), setLoading, setCharacter, setError);
  }, []);

  useEffect(() => {
    let cardUrl;

    switch (name) {
      case "clorinde":
        cardUrl = clorinde;
        break;
      case "sethos":
        cardUrl = sethos;
        break;
      case "sigewinne":
        cardUrl = sigewinne;
        break;
      default:
        cardUrl = `https://genshin.jmp.blue/characters/${name}/card`;
    }

    const img = new Image();
    img.src = cardUrl;
    img.onload = () => {
      setCard(cardUrl);
      setIsLoaded(true);
    };
  }, [name]);

  renderLoadingOrError(loading, error);

  if (character)
    return (
      <div className=" rounded-3xl h-fit  object-cover overflow-hidden bg-black p-2 relative">
        <Link to={`/characters/${name}`}>
          <div className={`rounded-2xl flex justify-center overflow-hidden`}>
            {!isLoaded ? (
              <div className="bg-gray-200 h-52 w-full animate-pulse"></div>
            ) : (
              <img
                loading="lazy"
                src={card}
                alt={character?.name}
                className="transform scale-125 translate-y-7 max-h-52 w-full object-cover object-center transition-all duration-300 hover:scale-150 cursor-pointer"
              />
            )}
          </div>
          <div className="text-white text-center  mt-2">{character?.name}</div>
          <div className="bg-black w-8 h-8 rounded-full flex justify-center items-center absolute top-0 right-0">
            <img
              loading="lazy"
              src={`https://genshin.jmp.blue/elements/${character?.vision.toLowerCase()}/icon`}
              alt={character?.element}
            />
          </div>
        </Link>
      </div>
    );
}
