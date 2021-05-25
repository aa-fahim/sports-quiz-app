import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function QuestionOption({ onPress, title, highlight }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.touchablePopup, highlight]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  touchablePopup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D8C98F",
    width: "100%",
    height: 50,
    marginHorizontal: "auto",
    borderRadius: 4,
  },
  text: {
    color: "white",
    fontFamily: "Jua",
    fontSize: 24,
  },
});

export default QuestionOption;
