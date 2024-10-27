import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PhotoAlbum4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.photoAlbum}
      onPress={() => navigation.navigate("PhotoAlbum")}
    >
      <Image
        style={styles.image67165953Icon}
        contentFit="cover"
        source={require("../assets/image-67165953.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("HomeScreenEmpty")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-2.png")}
        />
      </Pressable>
      <LinearGradient
        style={styles.photoAlbumChild}
        locations={[0.51, 1]}
        colors={["#fff", "#ab8484"]}
      />
      <Text style={styles.locationChinatown}>{`Location :Chinatown @ 8:00 pm
72 Mott St, New York, NY 10013`}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image67165953Icon: {
    top: 0,
    left: 0,
    width: 414,
    position: "absolute",
    height: 896,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 27,
    top: 24,
    width: 50,
    height: 50,
    position: "absolute",
  },
  photoAlbumChild: {
    top: 636,
    left: 29,
    borderRadius: Border.br_xl,
    width: 330,
    height: 223,
    backgroundColor: "transparent",
    position: "absolute",
  },
  locationChinatown: {
    top: 674,
    left: 70,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 274,
    height: 124,
    position: "absolute",
  },
  photoAlbum: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default PhotoAlbum4;
