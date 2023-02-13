"use client";

import { useFavorite } from "@/hooks/useFavorite";
import { Pokemon } from "@/services/pokemons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import FavoriteButton from "../FavoriteButton";

interface BackgroundColors {
  [category: string]: string;
}

interface TranslatedCategory {
  [category: string]: string;
}

const backgroundColor: BackgroundColors = {
  Water: "#1052ED",
  Electric: "#A7A700",
  Fire: "#A80409",
  Grass: "#008A37",
  Ice: "#3B82A4",
  Bug: "#1E4F29",
  Rock: "#5A1E0D",
  Psychic: "#A31A64",
  Normal: "#7A535E",
  Ground: "#9A5808",
};

const translatedCategory: TranslatedCategory = {
  Water: "Água",
  Electric: "Elétrico",
  Fire: "Fogo",
  Grass: "Grama",
  Ice: "Gelo",
  Bug: "Inseto",
  Rock: "Pedra",
  Psychic: "Psíquico",
  Normal: "Normal",
  Ground: "Terra",
};

type Props = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useFavorite();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (favorites.includes(pokemon.id)) {
      setActive(true);
    }
  }, []);

  const handleFavorite = () => {
    setActive(!active);
    if (!active) {
      addFavorite(pokemon.id);
    } else {
      removeFavorite(pokemon.id);
    }
  };

  return (
    <>
      <Card style={{ backgroundColor: `${backgroundColor[pokemon.category]}` }}>
        <span
          className="pokemon-background"
          style={{ backgroundImage: `url(${pokemon.background_image_url})` }}
        >
          <Image
            className="pokemon-image"
            alt="Pokemon"
            src={pokemon.image_url}
            fill
          />
        </span>
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-category">
          {translatedCategory[pokemon.category]}
        </span>
        <a onClick={(e) => handleFavorite()}>
          <FavoriteButton active={active} setActive={setActive} />
        </a>
      </Card>
    </>
  );
};

export default PokemonCard;
