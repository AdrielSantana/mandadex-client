"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  const [filterFavorite, setFilterFavorite] = useState<boolean>(true);

  const checkBackground = (filter: boolean): string => {
    return filter ? "#ffcc03" : "#BEBEBE";
  };

  const checkHeart = (filter: boolean): string => {
    return filter ? "#ED1C24" : "#212121";
  };

  const handleClick = () => {
    setFilterFavorite(!filterFavorite);
  };

  return (
    <>
      <motion.a
        onClick={(e) => {
          handleClick();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
        }}
        style={{
          backgroundColor: `${checkBackground(filterFavorite)}`,
        }}
        className="favorite-icon pointer"
      >
        <FaHeart
          title="Heart Icon"
          color={checkHeart(filterFavorite)}
          size="1.5rem"
        />
      </motion.a>
    </>
  );
};

export default Favorite;
