import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import patio from "../assets/patio.jpg";
import sala from "../assets/sala.jpg";
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import messaging from '@react-native-firebase/messaging';

const windowHeight = Dimensions.get("window").height;


const Inicio = ({ navigation }) => {
  async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
  useEffect(() => {
    if(requestUserPermission()){
      messaging().getToken().then(token=>{
        console.log(token);
      })
    }
  }, [])
  
  return (
    <View
      style={{ flex: 1, backgroundColor: "#0c649c", minHeight: windowHeight }}
    >
      <View style={{ backgroundColor: "#fc5505",borderBottomStartRadius:10,borderBottomEndRadius:10 }}>
        <Text style={styles.titles}>Ubicaciones</Text>
      </View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop:20,
  },
  titles: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    color:"#EEF2FF",
    
  },
  red: {
    color: "red",
  },
});

export default Inicio;
