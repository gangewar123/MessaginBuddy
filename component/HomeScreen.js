import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Button from './Button';
import Card from './card';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class HomeScreen extends Component {
    static navigationOptions = {
        headerTitle: 'My Buddies',
    };
    constructor(props) {
        super(props)
        this.state = {
            names: ["shant", "kiran", "manu", "nikhil"]
        }
    }


    renderItem() {
        console.log(this.state.names)

        return this.state.names.map((item) => {
            return <TouchableOpacity onPress={() => this.props.navigation.navigate("PersonalMessage", { name: item })}>
                <Card>
                    <View style={{ margin: 10, borderRadius: 15, }}>
                        <View style={styles.container} key={item}>
                            <Text style={{ marginLeft: 5 }}>{item}</Text>
                            <Text> > </Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        })
    }
    render() {
        return (
            <ScrollView>
                {this.renderItem()}
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
});