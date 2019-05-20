import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Right, Icon, Body} from 'native-base';

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{ fontSize: 24, color: tintColor}}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Header>
                    <Left>
                        <Icon 
                            name="menu"
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                    </Left>
                    <Body/>
                    <Right/>
                </Header>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
                    <Text>HomeScreen</Text>
                </View>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
        }
    }
)