import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DayEventPopUp from "../components/DayEventPopUp";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreenEmpty1 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScreenEmpty}>
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
      <View style={styles.homeScreenEmptyInner}>
        <LinearGradient
          style={styles.frameChild}
          locations={[0, 1]}
          colors={["#ffc107", "#b210ff"]}
        />
      </View>
      <Text style={styles.heroText}>Dates</Text>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableSpaceBlock]}
          onPress={() => navigation.navigate("SampleNote")}
        />
      </LinearGradient>
      <LinearGradient
        style={[
          styles.homeScreenEmptyChild,
          styles.homeScreenEmptyChildPosition,
        ]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <LinearGradient
        style={[styles.homeScreenEmptyItem, styles.pressableSpaceBlock]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <LinearGradient
        style={[
          styles.rectangleLineargradient,
          styles.homeScreenEmptyChildPosition,
        ]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <Text style={[styles.april15th2024, styles.april15th2024Typo]}>
        April 15th 2024
      </Text>
      <Text style={[styles.april14th2024, styles.april15th2024Typo]}>
        April 14th 2024
      </Text>
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
      <Pressable
        style={[styles.image4, styles.image4Layout]}
        onPress={() => navigation.navigate("Map1")}
      >
        <Image
          style={styles.image4Child}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={[styles.image3Icon, styles.image4Layout]}
          contentFit="cover"
          source={require("../assets/image-3.png")}
        />
      </Pressable>
      <View style={styles.rectangleView} />
      <DayEventPopUp
        clickTheTileToViewThatDays="Click the tile to view that day’s events."
        onClosePress={() => navigation.navigate("GeneratingAlbum")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 24,
    width: 24,
    top: 64,
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
    top: 51,
    position: "absolute",
  },
  wrapperPosition: {
    left: "50%",
    top: "50%",
    width: 365,
    position: "absolute",
  },
  pressableSpaceBlock: {
    marginLeft: -182,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
  },
  homeScreenEmptyChildPosition: {
    left: 25,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    width: 365,
    position: "absolute",
  },
  april15th2024Typo: {
    height: 67,
    width: 290,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_6xl,
    left: 71,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  image4Layout: {
    width: 46,
    position: "absolute",
  },
  button1: {
    left: 339,
    backgroundColor: Color.colorSteelblue_100,
    height: 50,
    width: 50,
    borderRadius: Border.br_mini,
    top: 51,
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
  frameChild: {
    marginTop: -54.5,
    marginLeft: -182.5,
    height: 127,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    width: 365,
    position: "absolute",
  },
  homeScreenEmptyInner: {
    top: 130,
    left: 24,
    height: 163,
    width: 365,
    position: "absolute",
  },
  heroText: {
    top: 46,
    left: 31,
    fontSize: FontSize.size_24xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    width: 138,
    height: 55,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  pressable: {
    marginTop: -146,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    height: 133,
  },
  homeScreenEmptyChild: {
    top: 460,
    height: 123,
  },
  homeScreenEmptyItem: {
    marginTop: 160,
    height: 110,
    left: "50%",
    top: "50%",
    width: 365,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: 743,
    height: 120,
  },
  april15th2024: {
    top: 323,
  },
  april14th2024: {
    top: 488,
  },
  image7: {
    left: 278,
    top: 60,
    width: 31,
    height: 31,
    position: "absolute",
  },
  image4Child: {
    top: -14,
    left: -12,
    width: 70,
    height: 70,
    position: "absolute",
  },
  image3Icon: {
    top: -2,
    left: 0,
    height: 47,
  },
  image4: {
    top: 794,
    left: 318,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 42,
  },
  rectangleView: {
    top: 0,
    left: -1,
    backgroundColor: Color.colorGainsboro_200,
    width: 415,
    position: "absolute",
    height: 896,
  },
  homeScreenEmpty: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default HomeScreenEmpty1;
