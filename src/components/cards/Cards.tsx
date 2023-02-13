"use client";

import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import PokemonCard from "./PokemonCard";

import ShowPokemonCardsSkeleton from "./ShowPokemonCardsSkeleton";

import { useFilter } from "@/hooks/useFilter";
import { Pokemon } from "@/services/pokemons";

const Cards = () => {
  const { cardsPokemon, successCardFetch, notFoundPokemon } = useFilter();

  return (
    <>
      <section className="cards-section">
        <Container className="cards-container">
          {!successCardFetch && !notFoundPokemon && (
            <ShowPokemonCardsSkeleton />
          )}

          {!notFoundPokemon &&
            successCardFetch &&
            cardsPokemon.map((pokemon: Pokemon, idx: number) => {
              return (
                <motion.span
                  className="card-container"
                  key={pokemon.id}
                  style={{
                    perspective: "1000px",
                  }}
                  initial={{ transform: "rotateY(90deg)", opacity: 0 }}
                  viewport={{ once: true }}
                  whileInView={{
                    transform: "rotateY(0deg)",
                    opacity: 1,
                    transition: {
                      delay: 0.15,
                      type: "spring",
                      damping: 30,
                      stiffness: 130,
                    },
                  }}
                >
                  <PokemonCard key={pokemon.id} pokemon={pokemon} />
                </motion.span>
              );
            })}

          {notFoundPokemon && (
            <p className="pokemon-cards-error">
              Ops, não encontramos seu Pokemon!
            </p>
          )}
        </Container>
      </section>
    </>
  );
};

export default Cards;
