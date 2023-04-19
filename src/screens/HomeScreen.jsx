import { View, Text, Button } from "react-native";
import { RootStackParamList } from "./types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// type Props = NativeStackScreenProps<RootStackParamList, "Home", "Detail">;

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", { name: "custom header" })
        }
      />
    </View>
  );
}
