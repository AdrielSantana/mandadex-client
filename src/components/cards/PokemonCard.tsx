"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";
import Favorite from "../Favorite";

interface BackgroundColors {
  [category: string]: string;
}

interface TranslatedCategory {
  [category: string]: string;
}

const backgroundColor: BackgroundColors = {
  Water: "#1052ED",
  Eletric: "#A7A700",
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
  Eletric: "Elétrico",
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
  name: string;
  category: string;
  backgroundURL: string;
  pokemonURL: string;
};

const PokemonCard = ({ name, category, backgroundURL, pokemonURL }: Props) => {
  return (
    <>
      <span className="card-container">
        <Card style={{ backgroundColor: `${backgroundColor[category]}!important` }}>
          <span
            className="pokemon-background"
            style={{ backgroundImage: `url(${backgroundURL})` }}
          >
            <Image
              className="pokemon-image"
              alt="Pokemon"
              src={pokemonURL}
              fill
            />
          </span>
          <span className="pokemon-name">{name}</span>
          <span className="pokemon-category">
            {translatedCategory[category]}
          </span>
          <Favorite />
        </Card>
      </span>
    </>
  );
};

export default PokemonCard;
