import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import Keyboard1 from "../components/Keyboard1";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const SearchingNote = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.searchingNote, styles.iconLayout]}>
      <View style={styles.button4} />
      <Text style={styles.searchByThe}>Search by the date</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Pressable
        style={styles.close}
        onPress={() => navigation.navigate("HomeScreenEmpty")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close1.png")}
        />
      </Pressable>
      <Keyboard1 />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  button4: {
    top: 88,
    left: 27,
    backgroundColor: "#5995b4",
    width: 360,
    height: 50,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  searchByThe: {
    top: 99,
    left: 125,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.nunitoLight,
    color: "#ccc",
    textAlign: "center",
    position: "absolute",
  },
  vectorIcon: {
    height: "3.01%",
    width: "6.52%",
    top: "9.6%",
    right: "84.78%",
    bottom: "87.39%",
    left: "8.7%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  close: {
    left: 343,
    top: 102,
    width: 24,
    height: 24,
    position: "absolute",
  },
  searchingNote: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
  },
});

export default SearchingNote;
