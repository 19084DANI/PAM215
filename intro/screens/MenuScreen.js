import { Text, StyleSheet, View } from 'react-native'
import React, { Component, useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import Imput_AlertScreen from './Imput_AlertScreen'
import Black_SlapScreen from './Back_SlapScreen'

import { Button } from 'react-native-web';

export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');


    switch(screen){
        case 'contador':
            return<ContadorScreen/>;
        case 'botones':
            return<BotonesScreen/>;
        case 'Imput':
            return<Imput_AlertScreen/>;
        case 'back':
            return<Black_SlapScreen/>;
        case 'scroll':
            return<ScrollScreen/>;
        case 'indicador':
            return<IndicatorScreen/>;
        case 'Flat':
            return<Flat_ListScreen/>;
        case 'modal':
            return<ModalScreen/>;
        case 'sheet':
            return<uttonSheetScreen/>;
        case 'menu':
            default:

            return (
                <View style={styles.container}>
                <Text>MenuScreen</Text>
                <Button onPress={()=> setScreen('contador') } title='Practica: Contador'/>
                <Button onPress={()=> setScreen('botones') } title='Practica: Buttons'/>
                <Button onPress={()=> setScreen('Imput') } title='Practica: imput'/>    
                <Button onPress={()=> setScreen('back') } title='Practica: background'/>
                <Button onPress={()=> setScreen('scroll') } title='Practica: scroll'/>
                <Button onPress={()=> setScreen('indicador') } title='Practica: indicadores'/>
                <Button onPress={()=> setScreen('flat') } title='Practica: flatprac'/>  
                <Button onPress={()=> setScreen('modal') } title='Practica: modal'/>     
                <Button onPress={()=> setScreen('sheet') } title='Practica: sheet'/>
                <Button onPress={()=> setScreen('menu') } title='Practica: menu'/>                                 
                </View>
            )

    }

  }

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#cacacaff',
    alignItems: 'center', // start < -- center -- > end
    justifyContent: 'center',
    marginTop:15,
  },
});