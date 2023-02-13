export type Pokemon = {
  id: number;
  name: string;
  category: string;
  image_url: string;
  background_image_url: string;
  created_at: string;
};

export type FilterType = string;

export type OrderType = string;

export const fetchPokemons = async () => {
  const pokemons: Pokemon[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}`
  ).then((res) => res.json());

  return pokemons;
};

export const fetchPokemon = async (params: string) => {
  const pokemons: Pokemon[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}?name=${params}`
  ).then((res) => res.json());

  return pokemons;
};
