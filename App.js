import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/navigations/Route';
import FlashMessage from "react-native-flash-message";
import TabRoutes from './src/navigations/TabRoutes';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Routes />
      {/* <TabRoutes /> */}
      <FlashMessage
        position="top"
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
