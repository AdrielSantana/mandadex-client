import useSWR from "swr";

export type Pokemon = {
  id: number;
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
  created_at: string;
};

export interface BackgroundColorsInterface {
  [category: string]: string;
}

export interface TranslatedCategoryInterface {
  [category: string]: string;
}

export const backgroundColor: BackgroundColorsInterface = {
  Water: "#1052ED",
  Electric: "#A7A700",
  Fire: "#A80409",
  Grass: "#008A37",
  Ice: "#3B82A4",
  Bug: "#1E4F29",
  Rock: "#5A1E0D",
  Psychic: "#A31A64",
  Normal: "#7A535E",
  Ground: "#9A5808",
};

export const translatedCategory: TranslatedCategoryInterface = {
  Water: "Água",
  Electric: "Elétrico",
  Fire: "Fogo",
  Grass: "Grama",
  Ice: "Gelo",
  Bug: "Inseto",
  Rock: "Pedra",
  Psychic: "Psíquico",
  Normal: "Normal",
  Ground: "Terra",
};

export type FilterType = string;

export type OrderType = string;

export const fetchPokemons = async () => {
  const pokemons: Pokemon[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return pokemons;
};

export const fetchPokemon = async (name: string) => {
  const pokemons: Pokemon[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?name=${name}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return pokemons;
};
