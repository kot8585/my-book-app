import "react-native-gesture-handler";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import { RootStackParamList } from "./src/screens/types";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTaps from "./src/navigators/BottomTaps";

// const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator> */}
      <BottomTaps />
    </NavigationContainer>
  );
}
