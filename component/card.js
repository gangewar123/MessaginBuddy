import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';



class Card extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        // height: 60,
        margin: 10,
        borderRadius: 15,
        // justifyContent: "space-between",
        // alignItems: "center",
        backgroundColor: "red",

    }
});

export default Card;
