import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
class PersonalMessage extends Component {
    constructor(props) {
        super(props)

    }
    static navigationOptions = {
        headerTitle: "Personel Message",
    };
    render() {

        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.state.params.name}</Text>
                <Text>{this.props.navigation.state.params.response}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "red",

    }
});




export default PersonalMessage;
