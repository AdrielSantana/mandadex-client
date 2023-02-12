"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
      duration: 0.1,
      type: "spring",
      damping: 100,
      stiffness: 600,
    },
  },
};

const RandomPokemon = () => {
  return (
    <AnimatePresence initial={true} mode="wait">
      <motion.span
        className="random-pokemon-span"
        variants={pokemonAnimation}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        key={0}
      >
        <Image
          alt="Random Pokemon"
          src={"/images/hero/mewtwo.gif"}
          className="random-pokemon"
          fill
        />
      </motion.span>
    </AnimatePresence>
  );
};

export default RandomPokemon;
