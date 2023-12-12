import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Stacknavigation from './app/navigation/stack/stack';


const App = () => {
  return (
    <NavigationContainer>
 <Stacknavigation/>

    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})