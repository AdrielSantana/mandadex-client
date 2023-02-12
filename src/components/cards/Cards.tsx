"use client";

import { Container } from "react-bootstrap";

import PokemonCard from "./PokemonCard";
import PokemonCardSkeleton from "./PokemonCardSkeleton";

const Cards = () => {
  return (
    <>
      <section className="cards-section">
        <Container className="cards-container">
          <PokemonCard
            name="nome"
            category="Psychic"
            backgroundURL="/images/grass.png"
            pokemonURL="/images/mewtwo.gif"
          />
          <PokemonCardSkeleton />
        </Container>
      </section>
    </>
  );
};

export default Cards;
