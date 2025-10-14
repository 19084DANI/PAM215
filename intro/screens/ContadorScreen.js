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

      <Text style={styles.texto} >Contador: </Text>
            <Text style={styles.texto2} > {Contador} </Text>
      
      <View style={styles.contendorbotones}>
      <Button color={'#10ff5cff'} title='Incrementar'onPress={()=>setcontaddor(Contador+1)}></Button>
      <Button color={'red'} title='Quitar'onPress={()=>setcontaddor(Contador-1)}></Button> 
      <Button title='Reiniciar'onPress={()=>setcontaddor(Contador-Contador)}></Button> 
          </View>         
      <StatusBar style="auto" />

    </View>
  );

}
//3-.Style: zona de estilos y posicionamiento
const styles = StyleSheet.create({
  container: {//dentro de esta clase es importante cuidar llaves y comas para poder separar y no falle nuestro proyecto
    flex: 1,
    backgroundColor: '#1b1b1bff',//le asignara el color al fondo
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontFamily:"Couirer",
    fontSize:40,
    color: '#e5ff00ff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  },
  texto2:{
    fontFamily:"Couirer",
    fontSize:40,
    color: '#e5ff00ff',
    fontWeight: 'bold',
    fontStyle: '',
    textDecorationLine: 'underline',
  },
  contendorbotones:{
    marginTop:15,
    flexDirection: "column",
    gap:15,
  },
});