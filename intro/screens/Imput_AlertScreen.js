import { Text, StyleSheet, View,Button, TextInput, Alert } from 'react-native'
import {useState} from 'react'

export default function Imput_AlertScreen() {
  const[nombre,setnombre] = useState('');
  const[keyword,setkeyword] = useState('');
  const[telefono,settelefono] = useState('');

  const mostrarAlerta = ()=>{
    if(nombre.trim() === '' || keyword.trim() === '' || telefono.trim === ''){
      Alert.alert("Campos vacios, favor de llenar todos los campos")//mobile
      alert("Campos vacios, favor de llenar todos los campos")//web
    } else{
      Alert.alert(
        "Datos ingresados",
        `Nombre: ${nombre}\n
        Password: ${keyword}\n
        telefono: ${telefono}\n`
      )
        alert(
        "Datos ingresados",
        `Nombre: ${nombre}\n
        Password: ${keyword}\n
        telefono: ${telefono}\n`
      )
      
    } 
  }
    return (
      <View style={styles.container}>
        <Text style = {styles.titulo}>Text-Input & Alert</Text>
        <Text style={styles.textos} >Nombre:</Text>
        <TextInput style={styles.input}
          placeholder='Ingresa tu nombre'
          value={nombre}
          onChangeText={setnombre}
        />
        <Text style={styles.textos}>Contrasenia:</Text>
        <TextInput style={styles.input}
          placeholder='Ingresa tu contrasenia'
          secureTextEntry={true}
          value={keyword}
          onChangeText={setkeyword}
        />
        <Text style={styles.textos} >telefono:</Text>
        <TextInput style={styles.input}
          placeholder='Ingresa tu telefono'
          keyboardType='phone-pad'
          value={telefono}
          onChangeText={settelefono}
         />
        <Button
          title = 'Mostrar Alerta'
          onPress={() => mostrarAlerta()}
         />
         
     
      </View>
    )
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe3b0ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo:{
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
    textDecorationLine: 'underline',
    marginBlock: 15,

  },
  textos:{
    fontSize: 20,
    color: '#c86635ff',
    marginTop: 5,
  },
  input:{
    width: '35%',
    borderWidth:2,
    borderColor:'#4a2a02ff',
    borderRadius: 50,
    padding: 10,
    marginBottom:10,
    backgroundColor:'#ffffffff'
  },

})