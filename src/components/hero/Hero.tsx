"use client";
import Image from "next/image";
import { Container } from "react-bootstrap";

import pokeball from "/public/images/hero/pokeball-hero.png";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <Container className="hero-container">
          <Image className="pokeball-hero" alt="Pokeball" src={pokeball} />

          <span className="random-pokemon-span">
            <Image
              alt="Random Pokemon"
              src={"/images/hero/mewtwo.gif"}
              className="random-pokemon"
              fill
            />
          </span>
        </Container>
      </section>
    </>
  );
};

export default Hero;
