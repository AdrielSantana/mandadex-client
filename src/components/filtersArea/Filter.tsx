"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { useFilter } from "@/hooks/useFilter";

type Props = {
  color: string;
  category: string;
  name: string;
};

const Filter = ({ name, color, category }: Props) => {
  const { filters, setFilters } = useFilter();

  const [filter, setFilter] = useState<boolean>(false);

  const handleActiveFilter = () => {
    setFilter(!filter);

    if (!filter) {
      let newFilters: string[] = [...filters, category];
      setFilters(newFilters);
    } else {
      let newFilters: string[] = [...filters];

      const index = newFilters.indexOf(category);

      if (index > -1) {
        newFilters.splice(index, 1);
      }

      setFilters(newFilters);
    }
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
        {name}
      </motion.button>
    </>
  );
};

export default Filter;
