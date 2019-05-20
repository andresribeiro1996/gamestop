import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, paragra } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/sideMenu/HomeScreen';
import SettingScreen from './screens/sideMenu/SettingScreen';
import ProfileScreen from './screens/sideMenu/ProfileScreen';
import GameListScreen from './screens/sideMenu/GameListScreen';
import SearchGameScreen from './screens/sideMenu/SearchGameScreen';

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }
}

const CustomDrawerCompoment = (props) => (
  <SafeAreaView style= {{ flex: 1 }}>
    <View style= {{ 
      height: 200, 
      backgroundColor: 'purple', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Image 
        source={require('./assets/wow.png')} 
        style={{ height: 120, width: 120, borderRadius: 60}} 
      />
      
      <Text style={{color: 'white'}}>
        André Ribeiro{"\n"}
        andresribeiro1996@gmail.com.
      </Text>
      
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator({
  Home:HomeScreen,
  Profile:ProfileScreen,
  GameList: GameListScreen,
  SearchGame: SearchGameScreen,
  Settings:SettingScreen,
}, {
  contentComponent: CustomDrawerCompoment,
  contentOptions: {
    activeTintColor: 'purple'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
