import React, { Component } from 'react';
import { Text, View} from 'react-native'
import {Header, Left, Right, Icon, Body} from 'native-base'

export class LogoutScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="logout" style={{ fontSize: 24, color: tintColor}}/>
        )
    }

  render() {
    return(
        <View style={styles.container}>
            <Text>Logout Screen</Text>
        </View>
    );
}
}

export default LogoutScreen
