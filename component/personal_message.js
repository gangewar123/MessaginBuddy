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
            <View style={styles.chatContainer}>
                <Text>{this.props.navigation.state.params.name}</Text>
                <Text>{this.props.navigation.state.params.response}</Text>
                <View>
                    
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    chatContainer:{
        flex:1
    },
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 15,
        backgroundColor: "red",

    },
    bottomInput:{
       flex:1,
       justifyContent:"center" 
    }
});




export default PersonalMessage;
