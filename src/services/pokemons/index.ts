import { REACT_APP_MOCK } from '@env';

import * as integration from './integration';
import * as mock from './mock';

const selectedModule = REACT_APP_MOCK === 'true' ? mock : integration;

export const pokemonService = {
  getPokemons: selectedModule.getPokemons,
};
