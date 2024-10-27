import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import DayEventPopUp from "../components/DayEventPopUp";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Achievements = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.achievements}>
      <View style={[styles.button1, styles.buttonLayout]} />
      <Image
        style={[styles.infoOutlineIcon, styles.searchLayout]}
        contentFit="cover"
        source={require("../assets/info-outline.png")}
      />
      <View style={[styles.button6, styles.buttonLayout]} />
      <View style={[styles.button7, styles.buttonLayout]} />
      <Pressable
        style={[styles.search, styles.searchLayout]}
        onPress={() => navigation.navigate("SearchingNote")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/search.png")}
        />
      </Pressable>
      <Image
        style={styles.image8Icon}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
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
      <Text style={styles.heroText}>Trophies</Text>
      <View style={[styles.achievementsChild, styles.achievementsPosition]} />
      <View style={[styles.achievementsItem, styles.achievementsPosition]} />
      <View style={[styles.achievementsInner, styles.rectangleViewPosition]} />
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.achievementsChild1, styles.achievementsChildPosition1]}
      />
      <View
        style={[styles.achievementsChild2, styles.achievementsChildPosition1]}
      />
      <View
        style={[styles.achievementsChild3, styles.achievementsChildPosition]}
      />
      <View
        style={[styles.achievementsChild4, styles.achievementsChildPosition]}
      />
      <Image
        style={[styles.image14Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image30Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image14Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image32Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image33Icon, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image34Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image35Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/image-14.png")}
      />
      <Image
        style={[styles.image26Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={[styles.image27Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={[styles.image28Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <Image
        style={[styles.image29Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-21.png")}
      />
      <DayEventPopUp
        clickTheTileToViewThatDays="10 memories made"
        infoPopupTop={330}
        infoPopupLeft={42}
        onClosePress={() => navigation.navigate("Achievements1")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 50,
    width: 50,
    backgroundColor: Color.colorSteelblue_200,
    borderRadius: Border.br_mini,
    top: 51,
    position: "absolute",
  },
  searchLayout: {
    height: 24,
    width: 24,
    top: 64,
    position: "absolute",
  },
  image4Layout: {
    width: 46,
    position: "absolute",
  },
  achievementsPosition: {
    top: 0,
    position: "absolute",
    height: 896,
  },
  rectangleViewPosition: {
    height: 229,
    width: 169,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    marginTop: -304,
    position: "absolute",
  },
  achievementsChildPosition1: {
    marginTop: -61,
    height: 229,
    width: 169,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  achievementsChildPosition: {
    marginTop: 182,
    height: 229,
    width: 169,
    backgroundColor: Color.colorGold,
    borderRadius: Border.br_3xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout1: {
    height: 74,
    width: 81,
    top: 222,
    position: "absolute",
  },
  iconPosition2: {
    top: 465,
    height: 74,
    width: 81,
    position: "absolute",
  },
  iconPosition1: {
    top: 708,
    height: 74,
    width: 81,
    position: "absolute",
  },
  iconLayout: {
    height: 19,
    width: 19,
    top: 398,
    position: "absolute",
  },
  iconPosition: {
    top: 641,
    height: 19,
    width: 19,
    position: "absolute",
  },
  button1: {
    left: 339,
  },
  infoOutlineIcon: {
    left: 352,
    overflow: "hidden",
  },
  button6: {
    left: 265,
  },
  button7: {
    left: 194,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  search: {
    left: 207,
  },
  image8Icon: {
    top: 60,
    left: 275,
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
    height: 47,
    left: 0,
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
  heroText: {
    top: 50,
    left: 34,
    fontSize: FontSize.size_16xl,
    fontWeight: "600",
    fontFamily: FontFamily.nunitoSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    width: 150,
    height: 55,
    position: "absolute",
  },
  achievementsChild: {
    backgroundColor: "#c4c4c4",
    width: 414,
    opacity: 0.2,
    left: 0,
  },
  achievementsItem: {
    left: -1,
    backgroundColor: Color.colorGainsboro_200,
    width: 415,
  },
  achievementsInner: {
    marginLeft: -183,
  },
  rectangleView: {
    marginLeft: 13,
  },
  achievementsChild1: {
    marginLeft: -183,
  },
  achievementsChild2: {
    marginLeft: 13,
  },
  achievementsChild3: {
    marginLeft: -183,
  },
  achievementsChild4: {
    marginLeft: 13,
  },
  image14Icon: {
    left: 68,
  },
  image30Icon: {
    left: 264,
  },
  image32Icon: {
    left: 265,
  },
  image33Icon: {
    left: 68,
  },
  image34Icon: {
    left: 68,
  },
  image35Icon: {
    left: 265,
  },
  image26Icon: {
    left: 170,
  },
  image27Icon: {
    left: 364,
  },
  image28Icon: {
    left: 170,
  },
  image29Icon: {
    left: 364,
  },
  achievements: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default Achievements;
