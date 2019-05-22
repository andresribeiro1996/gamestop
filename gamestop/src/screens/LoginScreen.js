import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'

export class Login extends Component {
    constructor(props) {
        super(props);
        }

    render() {
        const { login } = this.props;

        return (
        <View style={styles.container}>
            <Button
                onPress={login}
                title="Login"
                color="#841584"
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
})

export default Login
