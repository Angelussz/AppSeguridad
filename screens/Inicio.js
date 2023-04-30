import React from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import patio from "../assets/patio.jpg";
import sala from "../assets/sala.jpg";
const Inicio = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Ubicaciones</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Puerta1")}>
        <Image
          source={sala}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>Puerta Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Puerta2")}>
        <Image
          source={patio}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text>Puerta del Patio</Text> 
      </TouchableOpacity>
      {/* <Button
        title="Go to Puertas 1"
        onPress={() => navigation.navigate("Puerta1")}
      />
      <Button
        title="Go to Puertas 2"
        onPress={() => navigation.navigate("Puerta2")}
      /> */}
    </View>
  );
};

export default Inicio;
