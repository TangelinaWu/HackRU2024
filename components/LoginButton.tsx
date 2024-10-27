import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export type LoginButtonType = {
  /** Variant props */
  property1?: "Default";
};

const LoginButton = ({ property1 = "Default" }: LoginButtonType) => {
  return (
    <View style={styles.button1}>
      <Image
        style={styles.loginButtonIcon}
        contentFit="cover"
        source={require("../assets/login-button.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonIcon: {
    width: 288,
    height: 46,
  },
  button1: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },
});

export default LoginButton;
