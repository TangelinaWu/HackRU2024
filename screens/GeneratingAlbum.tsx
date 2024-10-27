import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const GeneratingAlbum = () => {
  return (
    <View style={styles.generatingAlbum}>
      <Text style={[styles.summerizingYourDay, styles.heroTextFlexBox]}>
        Summerizing your day
      </Text>
      <Text style={[styles.heroText, styles.heroTextFlexBox]}>Loading...</Text>
      <Image
        style={styles.httpsstorysetcomillustratIcon}
        contentFit="cover"
        source={require("../assets/httpsstorysetcomillustrationnotebookrafiki.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heroTextFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  summerizingYourDay: {
    top: 544,
    left: 34,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLight,
    color: Color.colorWhite,
    width: 349,
    height: 50,
  },
  heroText: {
    top: 583,
    left: 84,
    fontSize: FontSize.size_24xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 248,
    height: 55,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  httpsstorysetcomillustratIcon: {
    top: 257,
    left: 32,
    width: 339,
    height: 326,
    position: "absolute",
  },
  generatingAlbum: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 896,
  },
});

export default GeneratingAlbum;
