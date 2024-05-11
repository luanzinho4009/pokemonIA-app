export type PokemonResult = {
  name: string;
  url: string;
};

export type Pokemon = {
  count: string;
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    name: string;
    sprite: string;
  }[];
};
