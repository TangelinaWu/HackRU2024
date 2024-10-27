import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const PhotoAlbum3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.photoAlbum}>
      <Image
        style={[styles.imageIcon, styles.imagePosition]}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
      <View style={[styles.image, styles.imagePosition]} />
      <LinearGradient
        style={styles.photoAlbumChild}
        locations={[0.51, 1]}
        colors={["#fff", "#ab8484"]}
      />
      <Text style={styles.thisIsAll}>
        This is all the locations you went to today!!!!
      </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  imagePosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  imageIcon: {
    top: 3,
    height: 671,
  },
  image: {
    top: 0,
    height: 896,
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
  thisIsAll: {
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
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 31,
    top: 23,
    width: 50,
    height: 50,
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

export default PhotoAlbum3;
