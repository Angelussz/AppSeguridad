import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inicio from "./screens/Inicio";

const Stack = createNativeStackNavigator();
const MyStack = ()=>{
  return(
  <Stack.Navigator initialRouteName="Inicio">
    <Stack.Screen name="Inicio" component={Inicio} />
  </Stack.Navigator>
  )
};
export default function App() {
  return <NavigationContainer>
    <MyStack />
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
