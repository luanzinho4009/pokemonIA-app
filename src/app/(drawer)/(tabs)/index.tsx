import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { CardPokemon } from '@/components/card-pokemon';
import { Input } from '@/components/input';
import { pokemonService } from '@/services/pokemons';
import { Pokemon } from '@/services/pokemons/types';

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon>({} as Pokemon);
  const getPokemons = async () => {
    const response = await pokemonService.getPokemons();
    setPokemons(response);
  };

  useEffect(() => {
    getPokemons();
  }, []);
  return (
    <View className="flex-1 bg-black-800 p-4 pt-14">
      <Input>
        <Input.Field placeholder="Pesquise aqui..." />
      </Input>

      <FlatList
        data={pokemons.results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardPokemon image={item.sprite} title={item.name} />}
        numColumns={4}
        contentContainerClassName="gap-8 pt-20"
      />
    </View>
  );
}
