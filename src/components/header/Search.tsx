"use client";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { useFilter } from "@/hooks/useFilter";

const Search = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { setChangeData } = useFilter();

  const handleKeyPress = (event: any) => {
    if (event.key == "Enter") {
      handleClick();
    }
  };

  const handleClick = () => {
    setChangeData(pokemonName);
  };

  return (
    <>
      <span className="search">
        <motion.a
          onClick={(e) => {
            handleClick();
          }}
          className="pointer"
          whileHover={{ scale: 1.05, rotate: -5 }}
          whileTap={{
            scale: 0.95,
            rotate: 5,
          }}
        >
          <Image
            alt="search icon"
            src={"/images/header/search-icon.svg"}
            width={40}
            height={40}
          />
        </motion.a>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            value={pokemonName}
            onKeyDown={(e) => {
              handleKeyPress(e);
            }}
            onChange={(e) => setPokemonName(e.target.value)}
            bsPrefix="search-bar form-control"
            type="text"
            placeholder="Buscar"
          />
        </Form.Group>
      </span>
    </>
  );
};

export default Search;
