import React from "react";
import { View, Text, Image, StyleSheet,Dimensions, Button, Alert } from "react-native";
import miFirebase from "../../firebase"

const windowHeight = Dimensions.get('window').height;

const Puerta = ({ sensor, lugar, imagenLugar }) => {
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
      <Button onPress={()=> console.log("hola")} title="presionar" />
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
