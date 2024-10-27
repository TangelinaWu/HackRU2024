import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type DayEventPopUpType = {
  clickTheTileToViewThatDays?: string;

  /** Style props */
  infoPopupTop?: number | string;
  infoPopupLeft?: number | string;

  /** Action props */
  onClosePress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DayEventPopUp = ({
  clickTheTileToViewThatDays,
  infoPopupTop,
  infoPopupLeft,
  onClosePress,
}: DayEventPopUpType) => {
  const infoPopupStyle = useMemo(() => {
    return {
      ...getStyleValue("top", infoPopupTop),
      ...getStyleValue("left", infoPopupLeft),
    };
  }, [infoPopupTop, infoPopupLeft]);

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.infoPopup, styles.infoLayout, infoPopupStyle]}>
      <View style={[styles.infoPopupChild, styles.infoLayout]} />
      <Text style={styles.clickTheTile}>{clickTheTileToViewThatDays}</Text>
      <Pressable style={styles.close} onPress={onClosePress}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  infoLayout: {
    height: 236,
    width: 330,
    position: "absolute",
  },
  infoPopupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
  clickTheTile: {
    top: 38,
    left: 28,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 274,
    height: 124,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  close: {
    left: 290,
    top: 14,
    width: 24,
    height: 24,
    position: "absolute",
  },
  infoPopup: {
    top: 304,
    left: 51,
  },
});

export default DayEventPopUp;
