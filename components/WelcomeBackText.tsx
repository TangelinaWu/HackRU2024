import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const WelcomeBackText = () => {
  return (
    <View style={styles.diplay24Smbold}>
      <Text style={styles.diplay24Smbold1}>Welcome Back</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  diplay24Smbold1: {
    top: "0%",
    left: 22,
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  diplay24Smbold: {
    marginLeft: -117,
    top: 392,
    left: "50%",
    width: 234,
    height: 29,
    position: "absolute",
  },
});

export default WelcomeBackText;
