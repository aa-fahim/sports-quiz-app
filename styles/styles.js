import * as Font from "expo-font";
import { StyleSheet } from "react-native";

const fonts = {
  Jua: "Jua",
};

const loadFonts = async () => {
  await Font.loadAsync({
    Jua: require("../assets/fonts/Jua-Regular.ttf"),
  });
};

const headersStyle = StyleSheet.create({
  primaryHeader: {
    fontSize: 36,
    color: "white",
    fontFamily: "Jua",
  },
});

const buttonStyle = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#85B787",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,

    // boxShadow: "0 0 0 2px white",
    // iOS
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    // Android
    elevation: 3,
  },
});

const colors = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#363641",
    // backgroundImage:
    //  "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(32,30,62,1) 70%, rgba(250,250,254,1) 100%);",
  },
  secondaryColor: { color: "#85B787" },
  tertiaryColor: { color: "white" },
  quaternaryColor: { color: "#D8C98F" },
  quinaryColor: { color: "#3D4335" },
});

export { fonts, loadFonts, buttonStyle, headersStyle, colors };
