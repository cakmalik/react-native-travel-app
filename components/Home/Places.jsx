import { StyleSheet, Text, View, VirtualizedList } from "react-native";
import React from "react";
import { HeightSpacer } from "../../components";
import {SIZES} from "../../constants/theme"
import Country from "../../components/Tiles/Country/Country";

const Places = () => {
  const countries = [
    {
      _id: "324234234ffs",
      country: "USA",
      description:
        "The USA is a country in the Northern Hemisphere of the Earth.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png",
      region: "North America",
    },
    {
      _id: "32234234234ffs",
      country: "Canada",
      description:
        "The Canada is a country in the Northern Hemisphere of the Earth.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png",
      region: "North America",
    },
    {
      _id: "324207634234ffs",
      country: "Mexico",
      description:
        "The Mexico is a country in the Northern Hemisphere of the Earth.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/2560px-Flag_of_Mexico.svg.png",
      region: "North America",
    },
    {
      _id: "324234234ff0s0",
      country: "Brazil",
      description:
        "The Brazil is a country in the Northern Hemisphere of the Earth.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png",
      region: "South America",
    },
  ];

  return (
    <View>
      <HeightSpacer height={20} />
      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item}/>
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});
