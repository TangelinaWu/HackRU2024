import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const StickyDate = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.rectangleParent}>
      <View style={styles.frameChild} />
      <Text style={styles.heroText}>Dates</Text>
      <View style={styles.button1} />
      <Pressable
        style={[styles.infoOutline, styles.searchLayout]}
        onPress={() => navigation.navigate("HomeScreenEmpty1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/info-outline.png")}
        />
      </Pressable>
      <View style={[styles.button4, styles.buttonLayout]} />
      <View style={[styles.button5, styles.buttonLayout]} />
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("SearchingNote")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Pressable
        style={styles.image7}
        onPress={() => navigation.navigate("Achievements1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/image-7.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 24,
    width: 24,
    top: 47,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  buttonLayout: {
    backgroundColor: Color.colorSteelblue_200,
    height: 50,
    width: 50,
    borderRadius: Border.br_mini,
    top: 34,
    position: "absolute",
  },
  frameChild: {
    top: -38,
    left: -4,
    backgroundColor: Color.colorWhite,
    width: 445,
    height: 136,
    position: "absolute",
  },
  heroText: {
    top: 29,
    left: 31,
    fontSize: FontSize.size_24xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 124,
    height: 55,
    position: "absolute",
  },
  button1: {
    left: 339,
    backgroundColor: Color.colorSteelblue_100,
    height: 50,
    width: 50,
    borderRadius: Border.br_mini,
    top: 34,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  infoOutline: {
    left: 352,
  },
  button4: {
    left: 268,
  },
  button5: {
    left: 197,
  },
  search: {
    left: 210,
  },
  image7: {
    left: 278,
    top: 43,
    width: 31,
    height: 31,
    position: "absolute",
  },
  rectangleParent: {
    top: 17,
    left: 0,
    width: 414,
    height: 113,
    overflow: "hidden",
    position: "absolute",
  },
});

export default StickyDate;
