import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Display14Med = () => {
  return (
    <View style={styles.display14Med}>
      <Text style={styles.display14Med1}>No account?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display14Med1: {
    position: "absolute",
    top: "13.64%",
    left: "-1.12%",
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "center",
  },
  display14Med: {
    width: 89,
    height: 22,
  },
});

export default Display14Med;
