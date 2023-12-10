import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import {ReusableTile} from "../../components";

const Recomendations = () => {
  const navigation = useNavigation();
  const recommendations = [
    {
      _id: "23fg4242f23",
      country_id: "324234234ffs",
      title: "Walt Disney World",
      location: "USA",
      imageUrl:
        "https://deadline.com/wp-content/uploads/2022/12/walt-disney-logo.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "23fg433242f23",
      country_id: "32234234234ffs",
      title: "Niagara",
      location: "Canada",
      imageUrl:
        "https://img.okezone.com/content/2023/04/07/408/2794741/air-terjun-niagara-letaknya-di-amerika-serikat-atau-kanada-vJUvTtClif.jpg",
      rating: 4.0,
      review: "104 Reviews",
    },
    {
      _id: "23fgd4242f23",
      country_id: "324234234ffs",
      title: "Walt Disney World",
      location: "USA",
      imageUrl:
        "https://deadline.com/wp-content/uploads/2022/12/walt-disney-logo.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recomendations"}
          family={"bold"}
          size={SIZES.medium}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => 
        <ReusableTile item={item} onPress={() => navigation.navigate("PlaceDetails",item._id)} />}
      />
    </View>
  );
};

export default Recomendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
