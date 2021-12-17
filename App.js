import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigations/Route';
import FlashMessage from "react-native-flash-message";


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
      <FlashMessage
        position="top"
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
