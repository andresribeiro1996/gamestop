import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Right, Icon, Body} from 'native-base';

class SettingScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="settings" style={{ fontSize: 24, color: tintColor}}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Settings Screen</Text>
            </View>
        );
    }
}

export default SettingScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)