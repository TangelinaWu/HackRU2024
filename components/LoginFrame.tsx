import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import InputField from "./InputField";
import Display18Med from "./Display18Med";
import Display14Med from "./Display14Med";
import Display14Smbold from "./Display14Smbold";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import LoginButton from "./LoginButton";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

const LoginFrame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.login, styles.loginPosition]}>
      <InputField
        text="Email"
        johndoeexemplecom="Johndoe@exemple.com"
        showJohndoeexemplecom
      />
      <InputField
        text="Password"
        showJohndoeexemplecom={false}
        inputFieldTop={92}
      />
      <Text style={styles.password}>Password</Text>
      <View style={[styles.otherLogin, styles.loginPosition]}>
        <View style={[styles.display18MedParent, styles.medParentFlexBox]}>
          <Display18Med display18Med="Log in with" />
          <Image
            style={styles.flatColorIconsgoogle}
            contentFit="cover"
            source={require("../assets/flatcoloriconsgoogle.png")}
          />
          <Image
            style={styles.flatColorIconsgoogle}
            contentFit="cover"
            source={require("../assets/logosfacebook.png")}
          />
          <Image
            style={styles.antDesigngithubFilledIcon}
            contentFit="cover"
            source={require("../assets/antdesigngithubfilled.png")}
          />
        </View>
      </View>
      <View style={styles.loginChild} />
      <View style={[styles.display14MedParent, styles.medParentFlexBox]}>
        <Display14Med />
        <Display14Smbold />
      </View>
      <Pressable
        style={[styles.logInButton, styles.loginPosition]}
        onPress={() => navigation.navigate("GeneratingAlbum")}
      >
        <LoginButton property1="Default" />
        <Display18Med
          display18Med="Log in"
          display18MedAlignSelf="unset"
          display18MedPosition="absolute"
          display18MedWidth={138}
          display18MedMarginTop={-10}
          display18MedMarginLeft={-69}
          display18MedTop="50%"
          display18MedLeft="50%"
          display18MedHeight={20}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPosition: {
    left: "50%",
    position: "absolute",
  },
  medParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  password: {
    top: 135,
    left: 25,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_300,
    textAlign: "left",
    position: "absolute",
  },
  flatColorIconsgoogle: {
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  antDesigngithubFilledIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  display18MedParent: {
    marginTop: -16,
    marginLeft: -120,
    top: "50%",
    gap: Gap.gap_md,
  },
  otherLogin: {
    marginLeft: -78,
    top: 278,
    width: 156,
    height: 24,
  },
  loginChild: {
    top: 318,
    left: -1,
    backgroundColor: Color.colorGainsboro_100,
    width: 288,
    height: 1,
    position: "absolute",
  },
  display14MedParent: {
    marginLeft: -75,
    top: 335,
    width: 150,
    justifyContent: "center",
    gap: Gap.gap_sm,
  },
  logInButton: {
    marginLeft: -144,
    top: 200,
    gap: Gap.gap_lg,
  },
  login: {
    marginLeft: -154,
    top: 453,
    width: 308,
    height: 362,
  },
});

export default LoginFrame;
