import { AxiosError } from 'axios';

import { Pokemon, PokemonResult } from './types';
import { api } from '../api/api';

export const getPokemons = async () => {
  const response = await api
    .get('/pokemon')
    .then((res) => res.data)
    .catch((err: AxiosError) => err.response?.data);

  const pokemons = await Promise.all(
    response.results.map((res: PokemonResult) => api.get(res.url))
  ).then((res) => res.map((value) => value.data));

  return {
    count: response.count,
    next: response.next,
    previous: response.previous,
    results: pokemons.map((pokemon: any) => ({
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
    })),
  } as Pokemon;
};
