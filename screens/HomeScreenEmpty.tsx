import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import StickyDate from "../components/StickyDate";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const HomeScreenEmpty = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeScreenEmpty}>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperPosition]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableBg]}
          onPress={() => navigation.navigate("SampleNote")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.homeScreenEmptyChild, styles.homePosition]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <LinearGradient
        style={[styles.homeScreenEmptyItem, styles.pressableBg]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <LinearGradient
        style={[styles.homeScreenEmptyInner, styles.homePosition]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.pressableBg]}
        locations={[0, 1]}
        colors={["#ffc107", "#b210ff"]}
      />
      <Text style={styles.april16th2024}>April 16th 2024</Text>
      <Text style={styles.april15th2024}>April 15th 2024</Text>
      <Text style={[styles.april14th2024, styles.april14th2024Typo]}>
        April 14th 2024
      </Text>
      <Text style={[styles.april13th2024, styles.april14th2024Typo]}>
        April 13th 2024
      </Text>
      <Text style={[styles.april12th2024, styles.april14th2024Typo]}>
        April 12th 2024
      </Text>
      <StickyDate />
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperPosition: {
    width: 365,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  pressableBg: {
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    marginLeft: -182,
  },
  homePosition: {
    left: 25,
    backgroundColor: "transparent",
    borderRadius: Border.br_3xs,
    width: 365,
    position: "absolute",
  },
  april14th2024Typo: {
    left: 35,
    height: 67,
    width: 290,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_6xl,
    position: "absolute",
  },
  image4Layout: {
    width: 46,
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
    width: 365,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  homeScreenEmptyInner: {
    height: 120,
    top: 743,
  },
  rectangleLineargradient: {
    marginTop: -287,
    height: 127,
    width: 365,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  april16th2024: {
    top: 161,
    height: 34,
    width: 290,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_6xl,
    left: 32,
    position: "absolute",
  },
  april15th2024: {
    top: 306,
    height: 67,
    width: 290,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_6xl,
    left: 32,
    position: "absolute",
  },
  april14th2024: {
    top: 467,
  },
  april13th2024: {
    top: 608,
  },
  april12th2024: {
    top: 743,
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
  homeScreenEmpty: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default HomeScreenEmpty;
