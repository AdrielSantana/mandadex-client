"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import { useFilter } from "@/hooks/useFilter";

const Search = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { setChangeData } = useFilter();

  const handleSearch = () => {
    setChangeData(pokemonName);
  };

  return (
    <>
      <span className="search">
        <motion.a
          onClick={(e) => {
            handleSearch();
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
