"use client";

import { useFavorite } from "@/hooks/useFavorite";
import { Pokemon } from "@/services/pokemons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import FavoriteButton from "../FavoriteButton";

import { backgroundColor } from "@/services/pokemons";
import { translatedCategory } from "@/services/pokemons";

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
            width={200}
            height={140}
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
