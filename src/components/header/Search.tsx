"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Form from "react-bootstrap/Form";

const Search = () => {
  const handleSearch = () => {
    console.log("clicou no search");
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

        <Form.Group className="search-bar" controlId="formBasicEmail">
          <Form.Control
            bsPrefix={`search-bar form-control`}
            type="text"
            placeholder="Buscar"
          />
        </Form.Group>
      </span>
    </>
  );
};

export default Search;
