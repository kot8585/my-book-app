import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createBottomTabNavigator();

export default function BottomTaps() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="검색" component={DetailsScreen} />
      <Tab.Screen name="책읽기" component={DetailsScreen} />
      <Tab.Screen name="노트" component={DetailsScreen} />
      <Tab.Screen name="내정보" component={DetailsScreen} />
    </Tab.Navigator>
  );
}
