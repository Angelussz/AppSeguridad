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

const windowHeight = Dimensions.get("window").height;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    console.log("before token");
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log("after token: ", token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

const requestUserPermission = async () => {
  
}

const Inicio = ({ navigation }) => {
  const [expoPushToken, setExpoPushToken] = useState('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
  }, []);
  
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
