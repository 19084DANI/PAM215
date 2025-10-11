/*1-.import: zona de importaciones
  todo lo que egregaremos a nuestra pantalla en especifico*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button } from 'react-native';
import React,{useState} from 'react';

//2-. mainScreen:zona de comoponentes
export default function App() {

  const[Contador,setcontaddor]=useState(0);//destructuracion

  return (
    <View style={styles.container}>

      <Text>Contador: {Contador} </Text>
      <Button title='Incrementar'onPress={()=>setcontaddor(Contador+1)}></Button>
      <Button title='Quitar'onPress={()=>setcontaddor(Contador-1)}></Button> 
      <Button title='Reiniciar'onPress={()=>setcontaddor(Contador-Contador)}></Button>          
      <StatusBar style="auto" />

    </View>
  );

}
//3-.Style: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
