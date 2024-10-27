import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import LoginFrame from "../components/LoginFrame";
import WelcomeBackText from "../components/WelcomeBackText";
import { Color } from "../GlobalStyles";

const LoginTemplate = () => {
  return (
    <View style={styles.loginTemplate}>
      <Image
        style={styles.wallpaperIcon}
        contentFit="cover"
        source={require("../assets/wallpaper.png")}
      />
      <View style={styles.loginTemplateChild} />
      <LoginFrame />
      <Image
        style={styles.loginTemplateItem}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <WelcomeBackText />
      <Image
        style={styles.image19Icon}
        contentFit="cover"
        source={require("../assets/image-19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wallpaperIcon: {
    top: -99,
    right: -448,
    bottom: -107,
    left: -723,
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  loginTemplateChild: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(255, 149, 0, 0.7)",
    width: 428,
    position: "absolute",
    height: 896,
  },
  loginTemplateItem: {
    top: 327,
    left: 77,
    width: 283,
    height: 57,
    position: "absolute",
  },
  image19Icon: {
    marginLeft: -156,
    top: 75,
    left: "50%",
    width: 312,
    height: 309,
    position: "absolute",
  },
  loginTemplate: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
  },
});

export default LoginTemplate;
