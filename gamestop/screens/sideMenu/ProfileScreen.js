import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Right, Icon, Body} from 'native-base';

class ProfileScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="logo-reddit" style={{ fontSize: 24, color: tintColor}}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)