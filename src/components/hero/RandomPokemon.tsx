"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useFilter } from "@/hooks/useFilter";
import { Pokemon } from "@/services/pokemons";

const pokemonAnimation = {
  initial: {
    x: "-12rem",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
  exit: {
    x: "12rem",
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
};

const RandomPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const { firstRandomPokemonList, successRandomFetch } = useFilter();

  const randomIndex = (): number => {
    let index = Math.floor(Math.random() * firstRandomPokemonList.length);

    if (index == firstRandomPokemonList.length) {
      index--;
    }

    return index;
  };

  useEffect(() => {
    if (successRandomFetch) {
      setPokemon(firstRandomPokemonList[randomIndex()]);

      setInterval(() => {
        setPokemon(firstRandomPokemonList[randomIndex()]);
      }, 7000);
    }
  }, [successRandomFetch]);

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        className="random-pokemon-span"
        variants={pokemonAnimation}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        key={pokemon?.id ?? randomIndex()}
      >
        {!successRandomFetch && (
          <Image
            alt="Random Pokemon"
            src={"/images/hero/random-pokemon-skeleton.png"}
            className="random-pokemon"
            priority
            fill
          />
        )}

        {successRandomFetch && (
          <Image
            key={pokemon?.id}
            alt="Random Pokemon"
            src={
              pokemon?.image_url ?? "/images/hero/random-pokemon-skeleton.png"
            }
            className="random-pokemon"
            fill
          />
        )}
      </motion.span>
    </AnimatePresence>
  );
};

export default RandomPokemon;
