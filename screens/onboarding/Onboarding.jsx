import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Slides from "../../components/Onboard/Slides";

export default function Onboarding() {
  const slides = [
    {
      id: 1,
      image: require("../../assets/images/splash1.jpg"),
      title: "Find perfect place to stay",
    },
    {
      id: 2,
      image: require("../../assets/images/splash2.jpg"),
      title: "Discover the world",
    },
    {
      id: 3,
      image: require("../../assets/images/splash3.jpg"),
      title: "Find the best hotels in the world",
    },
  ];

  return (
    // <SafeAreaView>
    //   <Text>Onboarding</Text>
    // </SafeAreaView>

    <FlatList
      pagingEnabled
      horizontal
      showHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item} />}
    />
  );
}

const styles = StyleSheet.create({});
