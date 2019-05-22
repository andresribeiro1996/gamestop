import React from 'react';
import {Image, SafeAreaView, ScrollView } from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation';
import Login from './screens/LoginScreen';
import HomeScreen from './screens/sideMenu/HomeScreen';
import SettingScreen from './screens/sideMenu/SettingScreen';
import ProfileScreen from './screens/sideMenu/ProfileScreen';
import GameListScreen from './screens/sideMenu/GameListScreen';
import SearchGameScreen from './screens/sideMenu/SearchGameScreen';
import LogoutScreen from './screens/sideMenu/LogoutScreen';
import api from './services/api';
import { registerRootComponent } from 'expo';

import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  AsyncStorage,
} from 'react-native';

export default class App extends React.Component {

  state = {
    loggedInUser: null,
    errorMessage: ''
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //     isLoggedIn: false
  //   };

  //   this.handleLoginClick = this.handleLoginClick.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  // }

  // handleLoginClick() {
  //   this.setState({isLoggedIn: true});
  // }

  // handleLogoutClick() {
  //   this.setState({isLoggedIn: false});
  // }

  signIn = async () => {
    try {
      const response = await api.post('/api/authenticate', {
        email: 'diego@example.com',
        password: '123456',
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)],
      ]);

      this.setState({ loggedInUser: user });

      Alert.alert('Logado com sucesso!');
    } catch (err) {
      this.setState({ errorMessage: err.data.error });
    }
  };

  async componentDidMount() {
    await AsyncStorage.clear();

    const token = await AsyncStorage.getItem('@CodeApi:token');
    const user = JSON.parse(await AsyncStorage.getItem('@CodeApi:user')) || null;

    if (token && user) 
      this.setState({ loggedInUser: user });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <View style={styles.container}>
        { !!this.state.errorMessage && <Text>{this.state.errorMessage}</Text> }
        { this.state.loggedInUser
          ? <AppDrawerNavigator />
          : <Button onPress={this.signIn} title="Entrar" /> }
      </View>
      // <React.Fragment>
      //   {isLoggedIn ? <AppDrawerNavigator /> : <Login login={this.handleLoginClick} />}
      // </React.Fragment>
    );
  }
}

registerRootComponent(App)

const CustomDrawerCompoment = (props) => (
  <SafeAreaView style= {{ flex: 1 }}>
    <View style= {{ 
      height: 200, 
      backgroundColor: 'purple', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <Image 
        source={require('../assets/wow.png')} 
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
  Home: HomeScreen,
  Profile:ProfileScreen,
  GameList: GameListScreen,
  SearchGame: SearchGameScreen,
  Settings:SettingScreen,
  Logout: LogoutScreen
}, {
  contentComponent: CustomDrawerCompoment,
  contentOptions: {
    activeTintColor: 'purple'
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});