import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Display18MedType = {
  display18Med?: string;

  /** Style props */
  display18MedAlignSelf?: string;
  display18MedPosition?: string;
  display18MedWidth?: number | string;
  display18MedMarginTop?: number | string;
  display18MedMarginLeft?: number | string;
  display18MedTop?: number | string;
  display18MedLeft?: number | string;
  display18MedHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Display18Med = ({
  display18Med,
  display18MedAlignSelf,
  display18MedPosition,
  display18MedWidth,
  display18MedMarginTop,
  display18MedMarginLeft,
  display18MedTop,
  display18MedLeft,
  display18MedHeight,
}: Display18MedType) => {
  const display18MedStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", display18MedAlignSelf),
      ...getStyleValue("position", display18MedPosition),
      ...getStyleValue("width", display18MedWidth),
      ...getStyleValue("marginTop", display18MedMarginTop),
      ...getStyleValue("marginLeft", display18MedMarginLeft),
      ...getStyleValue("top", display18MedTop),
      ...getStyleValue("left", display18MedLeft),
      ...getStyleValue("height", display18MedHeight),
    };
  }, [
    display18MedAlignSelf,
    display18MedPosition,
    display18MedWidth,
    display18MedMarginTop,
    display18MedMarginLeft,
    display18MedTop,
    display18MedLeft,
    display18MedHeight,
  ]);

  return (
    <View style={[styles.display18Med, display18MedStyle]}>
      <Text style={styles.display18Med1}>{display18Med}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display18Med1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  display18Med: {
    alignSelf: "stretch",
    width: 128,
  },
});

export default Display18Med;
