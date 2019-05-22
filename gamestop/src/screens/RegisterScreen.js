import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import {Header, Left, Right, Icon, Body} from 'native-base';

class RegisterScreen extends Component {

    render(){
        return(
            <View style={styles.container}>
                 <Card>
                    <FormLabel>E-mail</FormLabel>
                        <FormInput placeholder="Digite seu e-mail" />
                    <FormLabel>Senha</FormLabel>
                    <FormInput secureTextEntry placeholder="Digite sua senha" />

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="Registar"
                        onPress={() => {
                        console.log('done')
                        }}
                    />
                </Card>
            </View>
        );
    }
}

export default RegisterScreen;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center'
        }
    }
)