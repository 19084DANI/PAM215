import React, { useState } from 'react';
import { Text, StyleSheet, View, ImageBackground,Button,Switch,TextInput} from 'react-native';


export default function RepasoEx() {

  return (
    <View>
        <TextInput>

        <Text>HOLAAA</Text>

        </TextInput>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // centra el cuadrito
  },
  cuadrito: {
    backgroundColor: '#893e3e',
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  medi: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
