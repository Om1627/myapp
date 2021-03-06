
import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import WelcomeScreen from "./screens/WelcomeScreen";
import { AppDrawerNavigator } from "./components/AppDrawerNavigator";
import  {AppTabNavigator}  from "./components/AppTabNavigator";


export default class App extends Component { 
  render(){
    return (
      <View style={styles.container}>
       <AppContainer/>
      </View>
    );
  }
  
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },
 
 
 
});

const AppContainer = createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    

  },
});
