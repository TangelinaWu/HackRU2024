import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SampleNote = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.sampleNote}>
      <View style={[styles.arrowBackIos, styles.modeIconLayout]} />
      <Text
        style={[styles.dayReviewApril, styles.dayReviewAprilLayout]}
      >{`         Day Review: 
     April 15th 2024 
`}</Text>
      <Text style={[styles.amRutgersHackathon, styles.galleryTypo]}>{`8:00 AM 
Rutgers Hackathon, arrived at Rutgers to start the day of coding, brainstorming, and collaboration with fellow 

10:30 AM 
Penn Station, grabbed public transit to head toward Rutgers for the hackathon, embracing the bustling energy of the station.

12:00 PM 
The Met Museum, took a break to explore the vast collection, focusing on sculptures and appreciating the artistry.
hackers.

3:00 PM 
Think Coffee, started the day with a delicious cup of coffee to fuel up for studying.

8:00 PM 
Chinatown Food Walk, enjoyed a late-night walk through Chinatown, savoring a variety of delicious bites and immersing in the lively atmosphere.`}</Text>
      <View style={[styles.button5, styles.button5Layout]} />
      <Image
        style={[styles.sampleNoteChild, styles.button5Layout]}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
      <Image
        style={[styles.modeIcon, styles.modeIconLayout]}
        contentFit="cover"
        source={require("../assets/mode.png")}
      />
      <Pressable
        style={styles.sampleNoteItem}
        onPress={() => navigation.navigate("Codehackphoto")}
      />
      <Text style={[styles.gallery, styles.button5Layout]}>Gallery</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modeIconLayout: {
    height: 27,
    width: 27,
    position: "absolute",
    overflow: "hidden",
  },
  dayReviewAprilLayout: {
    width: 360,
    textAlign: "left",
    position: "absolute",
  },
  galleryTypo: {
    fontFamily: FontFamily.nunitoBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.size_4xl,
    color: Color.colorBlack,
  },
  button5Layout: {
    height: 50,
    position: "absolute",
  },
  arrowBackIos: {
    top: 86,
    left: 44,
  },
  dayReviewApril: {
    marginLeft: -180,
    top: 59,
    left: "50%",
    fontSize: FontSize.size_16xl,
    fontFamily: FontFamily.nunitoRegular,
    height: 65,
    color: Color.colorBlack,
    width: 360,
    textAlign: "left",
  },
  amRutgersHackathon: {
    top: 199,
    left: 28,
    height: 615,
    width: 360,
    textAlign: "left",
    position: "absolute",
  },
  button5: {
    left: 339,
    borderRadius: Border.br_mini,
    backgroundColor: "#3b3b3b",
    width: 50,
    top: 24,
    height: 50,
  },
  sampleNoteChild: {
    left: 27,
    width: 50,
    top: 24,
    height: 50,
  },
  modeIcon: {
    top: 35,
    left: 350,
  },
  sampleNoteItem: {
    top: 1244,
    left: 31,
    backgroundColor: Color.colorGainsboro_100,
    width: 343,
    height: 71,
    position: "absolute",
  },
  gallery: {
    top: 1265,
    left: 93,
    textAlign: "center",
    width: 219,
    fontFamily: FontFamily.nunitoBoldItalic,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: FontSize.size_4xl,
    color: Color.colorBlack,
  },
  sampleNote: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 1335,
    overflow: "hidden",
  },
});

export default SampleNote;
