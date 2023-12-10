import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { NetworkImage, ReusableText } from "../../../components";
import { TEXT, COLORS } from "../../../constants/theme";
import {useNavigation} from "@react-navigation/native"
const Country = ({ item }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=>navigation.navigate("CountryDetails",item)}>
      <View>
        <NetworkImage src={item.imageUrl} width={70} height={70} radius={10} />
        <ReusableText
          text={item.country}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.red}
          align={"center"}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Country;

const styles = StyleSheet.create({});
