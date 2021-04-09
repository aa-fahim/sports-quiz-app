import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Context from "../contexts/context";

export default class IntroScreen extends React.Component {
  state = {
    numOfQuestions: "10",
  };

  setNumOfQuestions(value) {
    this.setState({
      numOfQuestions: value,
    });
  }

  setDifficulty(value) {
    this.setState({
      difficulty: value,
    });
  }

  setTypeOfQuestions(value) {
    this.setState({
      typeOfQuestions: value,
    });
  }

  static contextType = Context;

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Number of Questions</Text>
        <DropDownPicker
          items={[
            { label: "1", value: "1" },
            { label: "2", value: "2" },
            { label: "3", value: "3" },
            { label: "4", value: "4" },
            { label: "5", value: "5" },
            { label: "6", value: "6" },
            { label: "7", value: "7" },
            { label: "8", value: "8" },
            { label: "9", value: "9" },
            { label: "10", value: "10", selected: true },
            { label: "11", value: "11" },
            { label: "12", value: "12" },
            { label: "13", value: "13" },
            { label: "14", value: "14" },
            { label: "15", value: "15" },
            { label: "16", value: "16" },
            { label: "17", value: "17" },
            { label: "18", value: "18" },
            { label: "19", value: "19" },
            { label: "20", value: "20" },
            { label: "21", value: "21" },
            { label: "22", value: "22" },
            { label: "23", value: "23" },
            { label: "24", value: "24" },
            { label: "25", value: "25" },
            { label: "26", value: "26" },
            { label: "27", value: "27" },
            { label: "28", value: "28" },
            { label: "29", value: "29" },
            { label: "30", value: "30" },
            { label: "31", value: "31" },
            { label: "32", value: "32" },
            { label: "33", value: "33" },
            { label: "34", value: "34" },
            { label: "35", value: "35" },
            { label: "36", value: "36" },
            { label: "37", value: "37" },
            { label: "38", value: "38" },
            { label: "39", value: "39" },
            { label: "40", value: "40" },
            { label: "41", value: "41" },
            { label: "42", value: "42" },
            { label: "43", value: "43" },
            { label: "44", value: "44" },
            { label: "45", value: "45" },
            { label: "46", value: "46" },
            { label: "47", value: "47" },
            { label: "48", value: "48" },
            { label: "49", value: "49" },
            { label: "50", value: "50" },
          ]}
          containerStyle={{ width: 200, height: 40, margin: 15 }}
          style={{ backgroundColor: "#39644f" }}
          dropDownStyle={{ backgroundColor: "#39644f" }}
          onChangeItem={(item) => this.setNumOfQuestions(item.value)}
          searchable={true}
          searchablePlaceholder="How many?"
          searchablePlaceholderTextColor="gray"
          seachableStyle={{}}
          searchableError={() => <Text>Pick between 1-50</Text>}
          zIndex={5000}
        />
        <Text style={styles.text}>Select Difficulty:</Text>
        <DropDownPicker
          items={[
            { label: "Easy", value: "easy" },
            { label: "Medium", value: "medium" },
            { label: "Hard", value: "hard" },
          ]}
          defaultIndex={0}
          placeholder="Any"
          containerStyle={{ width: 200, height: 40, margin: 15 }}
          style={{ backgroundColor: "#39644f", color: "white" }}
          dropDownStyle={{ backgroundColor: "#39644f", color: "white" }}
          onChangeItem={(item) => this.setDifficulty(item.value)}
          zIndex={4000}
        />
        <Text style={styles.text}>Select Type</Text>
        <DropDownPicker
          items={[
            { label: "Multiple Choice Only", value: "multiple" },
            { label: "True / False Only", value: "boolean" },
          ]}
          defaultIndex={0}
          placeholder="Any"
          containerStyle={{ width: 200, height: 40, margin: 15 }}
          style={{ backgroundColor: "#39644f" }}
          dropDownStyle={{ backgroundColor: "#39644f" }}
          onChangeItem={(item) => this.setTypeOfQuestions(item.value)}
          zIndex={3000}
        />
        <Button
          title="Quiz me!"
          onPress={() =>
            this.props.navigation.navigate("QuestionScreen", this.state)
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4d4d4d",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
