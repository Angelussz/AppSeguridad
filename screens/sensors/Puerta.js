import React from "react";
import { View, Text, Image } from "react-native";

const Puerta = ({ sensor, lugar, imagenLugar }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>Ubicación: {lugar}</Text>
      <Image
        source={imagenLugar}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View>
        <Text>Historial de sensor {lugar}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text>Prendio Sensor de {lugar} a las {"(date)"}</Text>
      </View>
    </View>
  );
};

export default Puerta;
