import { Text, StyleSheet, View,ActivityIndicator,Button } from 'react-native'
import React,{use,useState} from 'react'

export default function IndicatorScreen() {
const [loading,setLoading] = useState (false)
const startLoading = () =>{
  setLoading(true)
  setTimeout (()=> setLoading (false),3000)
}
  if(loading){
    return(
    <View style={styles.container}>

      <View style={styles.loaderContainer}>

        <ActivityIndicator 
        
        size='large'
        color= '#350d0dff'
        animating={true}
        hidesWhenStopped={true}

        />
      <Text> Cargando...</Text>
      </View>

    </View>
    );
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>ActivityIndicator</Text>
      <Button title='Carga de Datos' onPress={startLoading} >

      </Button>
    </View>
  );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:20,
    marginBottom:20,
  },
  loaderContainer:{
    alignItems:'center',
  }
});