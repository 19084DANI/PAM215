import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Button, Switch, TextInput,Alert} from 'react-native';

export default function Repaso1() {
const[Terms, setTerms]=React.useState(false);
const[nombre, setnombre]=React.useState('');
const[email, setemail]=React.useState('');
const mostrarAlerta = () => {
  if (nombre.trim() === '' || email.trim() === '') {
    Alert.alert("Campos vacíos", "Favor de llenar todos los campos"); //movile
    alert("Campos vacíos, favor de llenar todos los campos"); // para web
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!Terms) {
    Alert.alert("Debe aceptar los términos y condiciones primero"); //mivile
    alert("Debe aceptar los términos y condiciones primero"); // para web
    return;
  }

  Alert.alert(
    "Datos ingresados",
    `Nombre: ${nombre}\nEmail: ${email}\nTérminos aceptados: ${Terms ? 'si' : 'No'}`
  );

  alert(
    `Datos ingresados:\nNombre: ${nombre}\nEmail: ${email}\nTérminos aceptados: ${Terms ? 'si' : 'No'}`
  );
};


  return (
    <ImageBackground 
      style={styles.splashImage}
      source={require('../assets/minecraft.jpg')}
    >

      <View style={styles.container}>

            <Text style={styles.texto}>REGISTRO USUARIO </Text>

       <View style={styles.backgroundsplash}>
   

         <TextInput style={styles.container2} //ingresar nombre
         placeholder="Ingresa tu nombre"  
        value={nombre}
        onChangeText={setnombre}
         />
        <View style={styles.backgroundsplash2}></View>

         <TextInput style={styles.container2}   //ingresar email

         placeholder="Ingresa tu Corrreo Electronico"  
        value={email}
        onChangeText={setemail}

         /> 
        
         <View style={styles.backgroundsplash3}></View>
         <View style={styles.backgroundsplash3}></View>  
         <View style={styles.terminosContainer}>

        <Text style={styles.textocomponentes}>Terminos y condiciones</Text>  


         <Switch style={styles.SmallSwitch} 
         value={Terms}
        onValueChange = {() => setTerms(!Terms)}     
        trackColor = {{ true: '#18ffffe7', false: '#00000019'}}            
         />         
          </View>       

        </View>
         <View style={styles.backgroundsplash3}></View>           
        <Button 
          title="REGISTRARSE" 
          onPress={() => mostrarAlerta()}
        />
      </View>
            
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.57)', //contenedor fuera
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundsplash: {
   // backgroundColor: '# rgba(0, 0, 0, 0.53)',//contenedor donde meti el texto
    height: 200,
    width: 305,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
   backgroundsplash2: {
    height: 5,
    width: 100,
    marginTop: 20,
    justifyContent: 'end',
    alignItems: 'center',
    position: 'relative',
  },
   backgroundsplash3: {
    backgroundColor2: '# rgba(0, 0, 0, 0.53)',//separadador
    width: 100,
    marginTop: 10,
    justifyContent: 'end',
    alignItems: 'center',
    position: 'relative',
  },  
  container2: { //contenedor de insertar texto
    color: 'white',
    width: 215,
    borderWidth:2,
    borderColor:'#34c2ffcb',
    borderRadius: 50,
    padding: 10,
    marginBottom:15,
    backgroundColor:'#ffffff02'
  },
  texto:{
    color: 'white',
    fontWeight:'bold',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
  },
  textocomponentes:{
    color: 'white',
    fontWeight:'bold',
    fontSize:15,
    justifyContent:'center',
    alignItems:'flex-end',
    marginRight: 8,
  },
  terminosContainer: {    //alinear mi switch con los terms
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},
SmallSwitch: {
  transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], // reduce tamaño 
},
});
