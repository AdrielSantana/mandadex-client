"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "react-bootstrap";

import RandomPokemon from "./RandomPokemon";

import pokeball from "/public/images/hero/pokeball-hero.png";

const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <Container className="hero-container">
          <Image className="pokeball-hero" alt="Pokeball" src={pokeball} />
          <RandomPokemon/>
        </Container>
      </section>
    </>
  );
};

export default Hero;
