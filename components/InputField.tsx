import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

export type InputFieldType = {
  text?: string;
  johndoeexemplecom?: string;
  showJohndoeexemplecom?: boolean;

  /** Style props */
  inputFieldTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InputField = ({
  text,
  johndoeexemplecom,
  showJohndoeexemplecom,
  inputFieldTop,
}: InputFieldType) => {
  const inputFieldStyle = useMemo(() => {
    return {
      ...getStyleValue("top", inputFieldTop),
    };
  }, [inputFieldTop]);

  return (
    <View style={[styles.inputField, styles.inputPosition, inputFieldStyle]}>
      <View style={[styles.inputFieldChild, styles.inputPosition]} />
      <Text style={[styles.text, styles.textFlexBox]}>{text}</Text>
      {showJohndoeexemplecom && (
        <Text style={[styles.johndoeexemplecom, styles.textFlexBox]}>
          {johndoeexemplecom}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputPosition: {
    left: "50%",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  inputFieldChild: {
    marginLeft: -144.5,
    top: 30,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    width: 288,
    height: 46,
  },
  text: {
    left: 8,
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    top: 0,
  },
  johndoeexemplecom: {
    top: 42,
    left: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_300,
  },
  inputField: {
    marginLeft: -145,
    width: 289,
    height: 76,
    top: 0,
  },
});

export default InputField;
