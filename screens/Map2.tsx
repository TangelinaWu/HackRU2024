import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const Map2 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.map}>
      <Pressable
        style={styles.imageShadowBox}
        onPress={() => navigation.navigate("Achievements1")}
      >
        <Image
          style={styles.image4Child}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.imageShadowBox}
        onPress={() => navigation.navigate("Achievements1")}
      >
        <Image
          style={styles.image4Child}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image4Child: {
    top: -14,
    left: -12,
    width: 70,
    height: 70,
    position: "absolute",
  },
  image1Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
    width: "100%",
  },
  imageShadowBox: {
    height: 42,
    width: 46,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 318,
    top: 794,
    position: "absolute",
  },
  map: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default Map2;
