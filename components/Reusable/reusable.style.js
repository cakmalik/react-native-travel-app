import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },

  rowWithSpace: (justify) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: justify,
  }),
});

export default reusable;
