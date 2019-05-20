import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Right, Icon, Body} from 'native-base';

class GameListScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="list" style={{ fontSize: 24, color: tintColor}}/>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Game List Screen</Text>
            </View>
        );
    }
}

export default GameListScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)