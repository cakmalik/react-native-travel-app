import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { COLORS, SIZES, TEXT } from "../../constants/theme";
import { AntDesign } from "@expo/vector-icons";
import styles from "./home.style";
import { useNavigation } from "@react-navigation/native";
import { ReusableText, ReusableBtn, HeightSpacer } from "../../components";

import Places from "../../components/Home/Places";
import Recomendations from "../../components/Home/Recomendations";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Hello User!"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity
            style={styles.box}
            onPress={() => navigation.navigate("Search")}
          >
            <AntDesign name="search1" size={18} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={20} />

        <ReusableText
          text={"Placess"}
          family={"bold"}
          size={SIZES.medium}
          color={COLORS.black}
        />

        <Places />

        <HeightSpacer height={10} />

        <Recomendations />
      </View>
    </SafeAreaView>
  );
};

export default Home;
