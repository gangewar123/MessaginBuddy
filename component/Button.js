import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = (props) => {
    return (

        <TouchableOpacity style={styles.container}>
            <Text style={styles.textStyle}>{props.children }</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({

    container: {
        height: 50,
        // width: 100,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#00aeef",
        margin:3,
        borderRadius:8

    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "white"

    }

});


export default Button;
