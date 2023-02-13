"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FavoriteContextType = {
  favorites: number[];
  addFavorite: (pokemon_id: number) => void;
  removeFavorite: (pokemon_id: number) => void;
};

const FavoriteContext = createContext<FavoriteContextType>(
  {} as FavoriteContextType
);

export const FavoriteContextProvider = (props: { children?: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites-pokemons");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const addFavorite = (pokemon_id: number) => {
    const updatedFavorites = [...favorites, pokemon_id];
    localStorage.setItem(
      "favorites-pokemons",
      JSON.stringify(updatedFavorites)
    );
    setFavorites(updatedFavorites);
  };

  const removeFavorite = (pokemon_id: number) => {
    const pokemonIndex = favorites.findIndex((id) => pokemon_id === id);

    if (pokemonIndex !== -1) {
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(pokemonIndex, 1);
      localStorage.setItem(
        "favorites-pokemons",
        JSON.stringify(updatedFavorites)
      );
      setFavorites(updatedFavorites);
    }
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => useContext(FavoriteContext);
