import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Codehackphoto = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.codehackphoto}>
      <Image
        style={styles.image671969291Icon}
        contentFit="cover"
        source={require("../assets/image-67196929-1.png")}
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
        style={styles.codehackphotoChild}
        locations={[0.51, 1]}
        colors={["#fff", "#ab8484"]}
      />
      <Text style={styles.locationHackru}>{`Location : HackRU @ 10:30 am
126 College Avenue · New Brunswick, NJ 08901 `}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image671969291Icon: {
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
  codehackphotoChild: {
    top: 636,
    left: 52,
    borderRadius: Border.br_xl,
    width: 330,
    height: 211,
    backgroundColor: "transparent",
    position: "absolute",
  },
  locationHackru: {
    top: 674,
    left: 80,
    fontSize: FontSize.size_4xl,
    fontFamily: FontFamily.nunitoRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 274,
    height: 124,
    position: "absolute",
  },
  codehackphoto: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    width: "100%",
  },
});

export default Codehackphoto;
