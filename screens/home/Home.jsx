import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import { ReusableText } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

const Home = () => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace("space-between")}>
        <ReusableText
          text={'Hello User!'}
          family={"medium"}
          size={16}
          color={COLORS.black}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
