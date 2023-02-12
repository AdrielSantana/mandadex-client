"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  color: string;
  category: string;
};

const Filter = ({ color, category }: Props) => {
  const [filter, setFilter] = useState<boolean>(false);

  const handleActiveFilter = () => {
    setFilter(!filter);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.95,
        }}
        value={category}
        onClick={(e) => handleActiveFilter()}
        className="filter-button"
        style={filter ? { backgroundColor: color, color: "#fff" } : {}}
      >
        {category}
      </motion.button>
    </>
  );
};

export default Filter;
