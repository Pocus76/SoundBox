import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {homeStyle} from './style/home';
import {globalStyle} from "./style/global";
import AppHeader from "./components/AppHeader";

export default class App extends React.Component {
  render() {
    return (
      <View style={globalStyle.container}>
          <AppHeader title = 'Toto' />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
