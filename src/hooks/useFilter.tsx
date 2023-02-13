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
  cardPokemons: Pokemon[];
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
  const [cardPokemons, setCardPokemons] = useState<Pokemon[]>([]);
  const [firstRandomPokemonList, setFirstRandomPokemonList] = useState<
    Pokemon[]
  >([]);

  const [notFoundPokemon, setNotFoundPokemon] = useState<boolean>(false);

  const [successCardFetch, setSuccessCardFetch] = useState<boolean>(false);
  const [successRandomFetch, setSuccessRandomFetch] = useState<boolean>(false);

  const [changeData, setChangeData] = useState<string>("");

  const [filters, setFilters] = useState<FilterType[]>([]);
  const [order, setOrder] = useState<OrderType>("name");

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

  const getCardsPokemonData = async (params: string) => {
    try {
      const pokemons = await fetchPokemon(params);

      if (pokemons.length > 0) {
        setCardPokemons(pokemons);
        setSuccessCardFetch(true);
        setNotFoundPokemon(false);
      } else {
        setNotFoundPokemon(true);
      }
    } catch (error) {
      console.log(error);
      setSuccessCardFetch(false);
    }
  };

  useEffect(() => {
    getRandomPokemonList();
  }, []);

  useEffect(() => {
    getCardsPokemonData(changeData);
  }, [changeData]);

  const handleFiltersChange = () => {
    if (successCardFetch)
      if (filters.length > 0) {
        let filteredList: Pokemon[] = [];

        firstRandomPokemonList.forEach((pokemon) => {
          if (filters.includes(pokemon.category)) {
            filteredList.push(pokemon);
          }
        });

        let orderCardPokemons = filteredList;

        if (order.match("increase")) {
          orderCardPokemons.sort((a, b) => a.id - b.id);
        }

        if (order.match("decrease")) {
          orderCardPokemons.sort((a, b) => b.id - a.id);
        }

        setCardPokemons(filteredList);
      } else {
        let orderCardPokemons = [...firstRandomPokemonList];

        if (order.match("increase")) {
          orderCardPokemons.sort((a, b) => a.id - b.id);
        }

        if (order.match("decrease")) {
          orderCardPokemons.sort((a, b) => b.id - a.id);
        }
        setCardPokemons(orderCardPokemons);
      }
  };

  useEffect(() => {
    handleFiltersChange();
  }, [filters, order]);

  return (
    <PokemonFilterContext.Provider
      value={{
        setChangeData,
        cardPokemons,
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
