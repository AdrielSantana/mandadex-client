"use client";

import {
  fetchPokemon,
  fetchPokemons,
  FilterType,
  OrderType,
  Pokemon,
} from "@/services/pokemons";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFavorite } from "./useFavorite";

type PokemonFilterContextType = {
  cardsPokemon: Pokemon[];
  firstRandomPokemonList: Pokemon[];
  notFoundPokemon: boolean;
  successCardFetch: boolean;
  successRandomFetch: boolean;
  setChangeData: Dispatch<SetStateAction<string>>;
  setOrder: Dispatch<SetStateAction<OrderType>>;
  setFilters: Dispatch<SetStateAction<FilterType[]>>;
  filters: FilterType[];
  setActiveFavoriteFilter: Dispatch<SetStateAction<boolean>>;
};

const PokemonFilterContext = createContext<PokemonFilterContextType>(
  {} as PokemonFilterContextType
);

export const PokemonFilterContextProvider = (props: {
  children?: ReactNode;
}) => {
  const [cardsPokemon, setCardsPokemon] = useState<Pokemon[]>([]);
  const [firstRandomPokemonList, setFirstRandomPokemonList] = useState<
    Pokemon[]
  >([]);

  const [notFoundPokemon, setNotFoundPokemon] = useState<boolean>(false);

  const [successCardFetch, setSuccessCardFetch] = useState<boolean>(false);
  const [successRandomFetch, setSuccessRandomFetch] = useState<boolean>(false);

  const [changeData, setChangeData] = useState<string>("");

  const [filters, setFilters] = useState<FilterType[]>([]);
  const [order, setOrder] = useState<OrderType>("name");
  const [unFilteredPokemonList, setUnFilteredPokemonList] = useState<Pokemon[]>(
    []
  );
  const [activeFavoriteFilter, setActiveFavoriteFilter] =
    useState<boolean>(false);

  const { favorites } = useFavorite();

  const getRandomPokemonList = async () => {
    try {
      const pokemons = await fetchPokemons();

      setFirstRandomPokemonList(pokemons);
      setSuccessRandomFetch(true);
    } catch (error) {
      console.log(error);
      setSuccessRandomFetch(false);
    }
  };

  useEffect(() => {
    getRandomPokemonList();
  }, []);

  const getCardsPokemonList = async (name: string) => {
    try {
      const pokemons = await fetchPokemon(name);

      setUnFilteredPokemonList(pokemons);
      handleFiltersChange(pokemons);
    } catch (error) {
      console.log(error);
      setSuccessCardFetch(false);
    }
  };

  useEffect(() => {
    setSuccessCardFetch(false);
    getCardsPokemonList(changeData);
  }, [changeData]);

  const handleFiltersChange = (pokemons: Pokemon[]) => {
    let favoritePokemonList: Pokemon[] = [];
    let filteredPokemonList: Pokemon[] = [];

    if (activeFavoriteFilter) {
      pokemons.forEach((pokemon) => {
        if (favorites.includes(pokemon.id)) {
          favoritePokemonList.push(pokemon);
        }
      });
    } else {
      favoritePokemonList = [...pokemons];
    }

    if (filters.length > 0) {
      favoritePokemonList.forEach((pokemon) => {
        if (filters.includes(pokemon.category)) {
          filteredPokemonList.push(pokemon);
        }
      });
    } else {
      filteredPokemonList = [...favoritePokemonList];
    }

    if (order.match("increase")) {
      filteredPokemonList.sort((a, b) => a.id - b.id);
    }
    if (order.match("decrease")) {
      filteredPokemonList.sort((a, b) => b.id - a.id);
    }

    if (filteredPokemonList.length > 0) {
      setCardsPokemon(filteredPokemonList);
      setNotFoundPokemon(false);
    } else {
      setNotFoundPokemon(true);
    }

    setSuccessCardFetch(true);
  };

  useEffect(() => {
    handleFiltersChange(unFilteredPokemonList);
  }, [filters, order, activeFavoriteFilter]);

  return (
    <PokemonFilterContext.Provider
      value={{
        setChangeData,
        cardsPokemon,
        firstRandomPokemonList,
        successRandomFetch,
        notFoundPokemon,
        successCardFetch,
        setOrder,
        setFilters,
        filters,
        setActiveFavoriteFilter,
      }}
    >
      {props.children}
    </PokemonFilterContext.Provider>
  );
};

export const useFilter = () => useContext(PokemonFilterContext);
