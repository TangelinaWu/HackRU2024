import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Keyboard1 = () => {
  return (
    <View style={[styles.keyboard, styles.keyboardPosition]}>
      <View style={[styles.background, styles.keyboardPosition]} />
      <View style={styles.keys} />
      <Text style={[styles.text, styles.qTypo]}>1</Text>
      <Text style={[styles.q, styles.qTypo]}>q</Text>
      <Text style={[styles.a, styles.aLayout]}>a</Text>
      <Text style={[styles.z, styles.zFlexBox]}>z</Text>
      <Text style={[styles.text1, styles.wFlexBox]}>2</Text>
      <Text style={[styles.w, styles.wFlexBox]}>w</Text>
      <Text style={[styles.s, styles.aFlexBox]}>s</Text>
      <Text style={[styles.x, styles.zFlexBox]}>x</Text>
      <Text style={[styles.text2, styles.eFlexBox]}>3</Text>
      <Text style={[styles.e, styles.eFlexBox]}>e</Text>
      <Text style={[styles.d, styles.aLayout]}>d</Text>
      <Text style={[styles.c, styles.cPosition]}>c</Text>
      <Text style={[styles.text3, styles.rFlexBox]}>4</Text>
      <Text style={[styles.r, styles.rFlexBox]}>r</Text>
      <Text style={[styles.f, styles.aFlexBox]}>f</Text>
      <Text style={[styles.v, styles.zFlexBox]}>v</Text>
      <Text style={[styles.text4, styles.tFlexBox]}>5</Text>
      <Text style={[styles.t, styles.tFlexBox]}>t</Text>
      <Text style={[styles.g, styles.aFlexBox]}>g</Text>
      <Text style={[styles.b, styles.zFlexBox]}>b</Text>
      <Text style={[styles.text5, styles.yFlexBox]}>6</Text>
      <Text style={[styles.y, styles.yFlexBox]}>y</Text>
      <Text style={[styles.h, styles.aFlexBox]}>h</Text>
      <Text style={[styles.n, styles.zFlexBox]}>n</Text>
      <Text style={[styles.text6, styles.uFlexBox]}>7</Text>
      <Text style={[styles.u, styles.uFlexBox]}>u</Text>
      <Text style={[styles.j, styles.aFlexBox]}>j</Text>
      <Text style={styles.m}>m</Text>
      <Text style={[styles.text7, styles.iFlexBox]}>8</Text>
      <Text style={[styles.i, styles.iFlexBox]}>i</Text>
      <Text style={[styles.k, styles.aLayout]}>k</Text>
      <Text style={[styles.text8, styles.oFlexBox]}>9</Text>
      <Text style={[styles.o, styles.oFlexBox]}>o</Text>
      <Text style={[styles.l, styles.aFlexBox]}>l</Text>
      <Text style={[styles.text9, styles.pFlexBox]}>0</Text>
      <Text style={[styles.p, styles.pFlexBox]}>p</Text>
      <Image
        style={styles.shiftIcon}
        contentFit="cover"
        source={require("../assets/shift.png")}
      />
      <Image
        style={styles.backspaceIcon}
        contentFit="cover"
        source={require("../assets/backspace.png")}
      />
      <View style={[styles.space, styles.cPosition]}>
        <View style={styles.spaceChild} />
      </View>
      <Text style={[styles.text10, styles.textFlexBox]}>.</Text>
      <Text style={[styles.text11, styles.text11Position]}>,</Text>
      <Text style={styles.text12}>?123</Text>
      <Image
        style={styles.emojiIcon}
        contentFit="cover"
        source={require("../assets/emoji.png")}
      />
      <Image
        style={[styles.backIcon, styles.text11Position]}
        contentFit="cover"
        source={require("../assets/back.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  qTypo: {
    height: 43,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    left: 0,
    position: "absolute",
  },
  aLayout: {
    width: 40,
    position: "absolute",
  },
  zFlexBox: {
    top: 152,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  wFlexBox: {
    left: 42,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  aFlexBox: {
    top: 101,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  eFlexBox: {
    left: 83,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  cPosition: {
    left: 146,
    position: "absolute",
  },
  rFlexBox: {
    left: 125,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  tFlexBox: {
    left: 166,
    width: 40,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  yFlexBox: {
    left: 208,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  uFlexBox: {
    left: 250,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  iFlexBox: {
    left: 291,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  oFlexBox: {
    left: 333,
    height: 43,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  pFlexBox: {
    left: 374,
    width: 40,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  textFlexBox: {
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  text11Position: {
    width: 30,
    top: 212,
    position: "absolute",
  },
  background: {
    top: -13,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkslategray_200,
    height: 274,
  },
  keys: {
    left: 14,
    width: 348,
    height: 206,
    top: 0,
    position: "absolute",
  },
  text: {
    top: 0,
  },
  q: {
    top: 50,
  },
  a: {
    left: 20,
    top: 101,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  z: {
    left: 63,
    width: 39,
    position: "absolute",
  },
  text1: {
    top: 0,
  },
  w: {
    top: 50,
  },
  s: {
    left: 62,
    width: 39,
    position: "absolute",
  },
  x: {
    left: 105,
    width: 39,
    position: "absolute",
  },
  text2: {
    top: 0,
  },
  e: {
    top: 50,
  },
  d: {
    left: 103,
    top: 101,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  c: {
    top: 152,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    width: 39,
  },
  text3: {
    top: 0,
  },
  r: {
    top: 50,
  },
  f: {
    left: 145,
    width: 39,
    position: "absolute",
  },
  v: {
    left: 188,
    width: 39,
    position: "absolute",
  },
  text4: {
    top: 0,
  },
  t: {
    top: 50,
  },
  g: {
    left: 187,
    width: 39,
    position: "absolute",
  },
  b: {
    left: 229,
    width: 40,
    position: "absolute",
  },
  text5: {
    top: 0,
  },
  y: {
    top: 50,
  },
  h: {
    left: 228,
    width: 39,
    position: "absolute",
  },
  n: {
    left: 271,
    width: 39,
    position: "absolute",
  },
  text6: {
    top: 0,
  },
  u: {
    top: 50,
  },
  j: {
    left: 270,
    width: 39,
    position: "absolute",
  },
  m: {
    left: 312,
    top: 152,
    width: 40,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
    position: "absolute",
  },
  text7: {
    top: 0,
  },
  i: {
    top: 50,
  },
  k: {
    left: 311,
    top: 101,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  text8: {
    top: 0,
  },
  o: {
    top: 50,
  },
  l: {
    left: 353,
    width: 39,
    position: "absolute",
  },
  text9: {
    top: 0,
  },
  p: {
    top: 50,
  },
  shiftIcon: {
    top: 165,
    left: 22,
    width: 20,
    height: 26,
    position: "absolute",
  },
  backspaceIcon: {
    top: 164,
    left: 366,
    width: 24,
    height: 18,
    position: "absolute",
  },
  spaceChild: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 129,
    height: 34,
    top: 0,
    left: 0,
    position: "absolute",
  },
  space: {
    top: 205,
    width: 154,
    height: 40,
  },
  text10: {
    width: 32,
    top: 212,
    height: 33,
    left: 312,
    position: "absolute",
  },
  text11: {
    left: 60,
    height: 33,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_lgi,
  },
  text12: {
    top: 209,
    left: 11,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    height: 30,
    width: 39,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorLightgray_100,
    position: "absolute",
  },
  emojiIcon: {
    top: 216,
    left: 109,
    width: 18,
    height: 17,
    position: "absolute",
  },
  backIcon: {
    left: 365,
    height: 31,
  },
  keyboard: {
    top: 635,
    height: 261,
  },
});

export default Keyboard1;
