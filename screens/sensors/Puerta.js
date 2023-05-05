import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet,Dimensions, Button, Alert } from "react-native";
import miFirebase from "../../firebase"
import { query,getDocs, where, collection, onSnapshot, doc} from "firebase/firestore";
import * as Notifications from 'expo-notifications';

const windowHeight = Dimensions.get('window').height;

export async function getItems(uid){
    try {
        let items = []
        
        const q = query(collection(miFirebase.db, "sensores"), where("id", "==", uid));
        const response = await getDocs(q);
        response.forEach((doc)=>{
            items.push(doc.data())
            
        })
        return items;
    } catch (error) {
        throw new Error(error);
        // console.log(error);
    }
}
async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Hola Angeluz! 📬",
      body: 'Here is the notification body',
      data: { data: 'goes here' },
    },
    trigger: { seconds: 2 },
  });
}


const Puerta = ({ sensor, lugar, imagenLugar }) => {
  useEffect(()=>{
      onSnapshot(doc(miFirebase.db, "sensores", sensor), (doc) => {
      console.log("Current data: ", doc.data());

      (async function () {
        await schedulePushNotification();
      })();
  });
  },[])
  // unsub
  return (
    <View style={{backgroundColor:"#0c649c", minHeight:windowHeight}}>
      <View style={{backgroundColor:"#2474a9"}}>
      <Text style={styles.titles}>Ubicación: {lugar}</Text>
      </View>
      <Image
        source={imagenLugar}
        style={{ width: 100, height: 100, borderRadius: 50, alignSelf:"center", margin:20 }}
      />
      <View style={styles.historial}>
        <Text style={styles.subtitles}>Historial de sensor {lugar}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
        <Text style={styles.text} >Prendio Sensor de {lugar} a las {"(date)"}</Text>
      </View>
      <Button onPress={async()=>{
        let sensor = await getItems(1);
        console.log(sensor);
      }
          } title="presionar" />
    </View>
  );
};

const styles = StyleSheet.create({
  historial: {
    marginTop:50,
    marginLeft: 20,
    marginRight: 20,
    // borderWidth: 2,
    // borderColor: "blue",
    // borderRadius:10
  },
  titles: {
    alignSelf:"center",
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    padding:5,
    color:"#EEF2FF"
    
    
  },
  subtitles: {
    fontWeight:"bold",
    fontSize: 20,
    backgroundColor:"#fc5505",
    color:"#EEF2FF",
    borderRadius:5,
    marginBottom:10
  },
  text: {
    
    backgroundColor:"#bbc5cb",
    color:"#54545c",
    borderRadius:3,
    marginBottom:3
  },
});

export default Puerta;
