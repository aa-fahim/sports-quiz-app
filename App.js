import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "./screens/IntroScreen.js";
import QuestionScreen from "./screens/QuestionScreen.js";
import ResultScreen from "./screens/ResultScreen.js";
import GlobalState from "./contexts/GlobalState.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GlobalState>
        <Stack.Navigator
          initialRouteName="IntroScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} />
        </Stack.Navigator>
      </GlobalState>
    </NavigationContainer>
  );
}
