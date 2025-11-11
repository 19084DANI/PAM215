import { Text, StyleSheet, View, FlatList,SectionList,ScrollView } from 'react-native'
import React,{Component} from 'react'

export default function Flat_ListScreen() {

    const datos = [
      { id: '1', nombre : 'manzana' },
      { id: '2', nombre : 'banana' },
      { id: '3', nombre : 'cereza' },
      { id: '4', nombre : 'durazno' },
      { id: '5', nombre : 'uva' },
      { id: '6', nombre : 'kiwi' },
    ];

  const secciones =[
    {
      titulo: 'frutas',
      data:[
        {nombre:'manzana'},
        {nombre: 'banana'},
        {nombre: 'cereza'},
        {nombre: 'durazno'},
        {nombre:'uva'},
        {nombre: 'kiwi'},
      ]
    },
    {
    titulo: 'verduaras',
    data:[
      {nombre:'zanahoria'},
      {nombre: 'lechuga'},
      {nombre: 'tomate'},
      {nombre: 'brocoli'},
    ]
   }
  ]
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.Titulo}>Ejemplo de FlatList</Text>
        <FlatList
        
        data={datos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.elementos}>

            <Text style={styles.text}> {item.nombre}</Text>

          </View>
          )}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separador}/>}
        />
        <Text style={styles.Titulo2}>Ejemplo de SectionList</Text>
            <SectionList
            
            sections={secciones}
            keyExtractor={(item,index) => item.nombre + index}
            renderItem={({item}) =>(

              <View style={styles.itemsSeccion}>
                    <Text style={styles.text}>
                      {item.nombre}</Text>
              </View>
            )}
              renderSectionHeader={({section: {titulo}}) =>(
                <View style={styles.encabezado}>
                    <Text style={styles.tituloSeccion}> {titulo}</Text>


                </View>
              )}  
              scrollEnabled={false}
              stickySectionHeadersEnabled={false}  
            />
      </View>
      </ScrollView>

    )
  }


const styles = StyleSheet.create({
container:{
  alignItems:'center',
  justifyContent:'center',
  backgroundColor:'#ffa167ff',
},
content:{
  flex:1,
  padding:20,
  paddingBottom:20,

},
Titulo:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:20,
  margintop:20,
  textAlign:'center',
  color:'#423112ff'
},
Titulo2:{
  fontSize:20,
  fontWeight:'bold',
  marginBottom:20,
  marrginTop:30,
  textAlign:'center',
  color:'#482d18ff',
},
elementos:{
  width:'100%',
  height:80,
  backgroundColor:'#2d97d4ff',
  justifyContent:'center',
  alignItems:'center',
  marginVertical:5,
  borderRadius:5,
  shadowColor:'black',
  shadowOffset:{
    width:0,
    height:3,
  },
  shadowOpacity:0.3,
  shadowRadius:4,
  elevation:5,
},
text:{
  fontSize:20,
  fontFamily:'Times New Roman',
  color:'#ffffffff',
  fontWeight:'900',
  textDecorationLine:'underline0',
},
separador:{
  height:10,
},
encabezado:{
  backgroundColor:'#54be8eff',
  padding:15,
  borderRadius:12,
  marginTop:10,
  marginBottom:10,
  shadowColor:'#000',
  shadowOffset:{
    width:0,
    height:2,
  },
  shadowOpacity:0.25,
  shadowRadius:3.84,
  elevation:5,
},
tituloSeccion:{
  fontSize:22,
  fontWeight:'bold',
  color:'#000000',
  textAlign:'center',
  fontFamily:'Times New Roman'
},
  itemsSeccion:{
    backgroundColor:'#860808ff',
    padding:15,
    marginVertical:5,
    borderRadius:10,
    marginLeft:10,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:2,
    },
    shadowOpacity:0.2,
    shadowRadius:2,
    elevation:3,
  },
  textItem:{
    fontSize:18,
    fontWeight:'700',
    color:'#000000',
    fontFamily:'Times New Roman',
    textAlign:'center'
  }

})