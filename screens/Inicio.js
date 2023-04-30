import React from "react";
import { View, Text, Button, TouchableOpacity, Image,StyleSheet } from "react-native";
import patio from "../assets/patio.jpg";
import sala from "../assets/sala.jpg";
const Inicio = ({ navigation }) => {
  return (
  <View style={{ flex: 1}} >
      <Text style={{alignSelf:"center"}}>Ubicaciones</Text>
      <View style={styles.sensores}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sensores: {
    flex:1,
    flexDirection: 'row',
    justifyContent: "space-around",
    // alignItems: "center"
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default Inicio;
