import { Image, Text, View } from 'react-native';

export type CardPokemonProps = {
  image: string;
  title: string;
};
export const CardPokemon = ({ image, title }: CardPokemonProps) => {
  return (
    <View className="w-1/4 flex-col items-center justify-center gap-2">
      <Image
        source={{
          uri: image,
        }}
        width={60}
        height={60}
        className="cursor-pointer rounded-full bg-purple-200"
      />
      <Text className="text-white">{title}</Text>
    </View>
  );
};
