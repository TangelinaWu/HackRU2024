import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Display14Smbold = () => {
  return (
    <View style={styles.display14Smbold}>
      <Text style={styles.display14Smbold1}>Sign up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display14Smbold1: {
    position: "absolute",
    marginLeft: -27.5,
    top: "13.64%",
    left: "50%",
    fontSize: FontSize.size_sm,
    textDecoration: "underline",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkred,
    textAlign: "center",
  },
  display14Smbold: {
    alignSelf: "stretch",
    width: 51,
  },
});

export default Display14Smbold;
