import { Text, StyleSheet, View,Modal,Pressable,TextInput} from 'react-native'
import React,{useState} from 'react'

export default function ModalScreen() {
const [mostrar,setMostrar] = useState(null);

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>

        <Pressable style={styles.boton} onPress={()=> setMostrar('login')}>
          <Text style={styles.Text}>Iniciar Sesion</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={()=> setMostrar('registrar')}>
          <Text style={styles.Text}>Registrarse</Text>
        </Pressable>
        <Pressable style={styles.boton} onPress={()=> setMostrar('alerta')}>
          <Text style={styles.Text}>Alerta</Text>
        </Pressable>    
        <Modal
        
        animationType='slide'
        transparent={false}
        visible={mostrar === 'login'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>

          <Text style={styles.titulo}>Formulario de Inicio de Sesion</Text>
            
          <TextInput
          placeholder='Ingrese su Usuario'
          style={styles.TextInput}          
          />
          <TextInput
          placeholder='Ingrese su Contrasena'
          style={styles.TextInput}   
          secureTextEntry={true}       
          />    
          <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
            <Text style={styles.Text}>Iniciar sesion</Text>
            </Pressable>      
          </View>
          
          </Modal>       
        <Modal
        
        animationType='slide'
        transparent={false}
        visible={mostrar === 'registrar'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>

          <Text style={styles.titulo}>Formulario de Inicio de Sesion</Text>
            
          <TextInput
          placeholder='Ingrese su Usuario'
          style={styles.Input}          
          />
          <TextInput
          placeholder='Ingrese su Email'
          style={styles.TextInput}   
          keyboardType={'email-address'}     
          />           
          <TextInput
          placeholder='Ingrese su Contrasena'
          style={styles.Input}   
          secureTextEntry={true}       
          />    
          <Pressable style={styles.boton} onPress={()=> setMostrar(null)}>
            <Text style={styles.Text}>Iniciar sesion</Text>
            </Pressable>      
          </View>
          
          </Modal>   

          <Modal
          animationType='fade'
          transparent={false}
          visible={mostrar === 'alerta'}
          onRequestClose={()=> setMostrar(null)}
          >
            <View style={styles.container3}>

              <View style={styles.containerAlerta}>

                <Text style={styles.textAlerta}> Esto es una Alerta</Text>


                <View style={styles.containerBoton}>

                  <Pressable style={styles.boton1} onPress={()=> setMostrar(null)}>
                  <Text style={styles.Text}>ok</Text>

                  </Pressable>
                  <Pressable style={styles.boton2} onPress={()=> setMostrar(null)}>
                  <Text style={styles.Text}>Cerrar</Text>

                  </Pressable>

                </View>

              </View>

            </View>
            
          </Modal>  
      </View>
    )
  }


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5c093fff'
  },
  container2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#a5d8ffff'
  },
  container3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#000000ff'
  },
  boton:{
    backgroundColor:'#ff7171ff',
    padding:15,
    borderRadius:5,
    marginBottom:15,
    width:'70%',
    alignItems:'center',
  },
  Text:{
    color:'#fff',
    fontSize:18,
    fontWeight:'500',
  },
  titulo:{
    fontSize:25,
    marginBottom:20,
  },
  Input:{
    width:'80%',
    borderWidth:1,
    borderColor:'#000',
    borderRadius:10,
    marginBottom:20,
    padding:15,
    backgroundColor:'#ffff'
  },
  containerAlerta:{
    width:300,
    height:200,
    backgroundColor:'#ffff',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
  },
  textAlerta:{
    fontSize:20,
    color:'#000'
  },
  boton1:{
    backgroundColor:'#4c0167ff',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center',
  },
  boton2:{
    backgroundColor:'#01674cff',
    padding:15,
    borderRadius:20,
    marginRight:10,
    width:100,
    alignItems:'center',
  },
  containerBoton:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:25,
    width:'80%',
  }
})