import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inicio from "./screens/Inicio";
import Puerta from "./screens/sensors/Puerta";
import patio from "./assets/patio.jpg";
import sala from "./assets/sala.jpg";
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Screen
        name="Inicio"
        options={{ title: "Tus Sensores Entel" }}
       
      >
        {(props) => <Inicio {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Puerta1" options={{ title: "Sala" }} >
        {(props) => <Puerta {...props} sensor="sensor1" lugar="Sala" imagenLugar={sala}  />}
      </Stack.Screen>
      <Stack.Screen name="Puerta2" options={{ title: "Patio" }} >
        {(props) => <Puerta {...props} sensor="sensor2" lugar="Patio" imagenLugar={patio} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
