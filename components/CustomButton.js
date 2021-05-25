import React from "react";
import { TouchableOpacity, Text } from "react-native";

function CustomButton({ onPress, style, textStyle, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
