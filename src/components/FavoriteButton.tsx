"use client";
import { useFavorite } from "@/hooks/useFavorite";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

import { FaHeart } from "react-icons/fa";

type Props = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};

const FavoriteButton = ({ active, setActive }: Props) => {

  const checkBackground = (filter: boolean): string => {
    return filter ? "#ffcc03" : "#BEBEBE";
  };

  const checkHeart = (filter: boolean): string => {
    return filter ? "#ED1C24" : "#212121";
  };

  const handleClick = () => {
    setActive(!active);
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
          backgroundColor: `${checkBackground(active)}`,
        }}
        className="favorite-icon pointer"
      >
        <FaHeart
          title="Heart Icon"
          color={checkHeart(active)}
          size="1.5rem"
        />
      </motion.a>
    </>
  );
};

export default FavoriteButton;
