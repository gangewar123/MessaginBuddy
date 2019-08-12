import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Card from "./card"

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        "name": "kiran",
        "response": "I am coming.."
      },
      {
        "name": "shant",
        "response": "hello are ypu coming"
      }]
    };
  }
  static navigationOptions = {
    headerTitle: 'Chat',

  };

  renderItem() {
    console.log(this.state.message)

    return this.state.messages.map((message) => {
      return <TouchableOpacity onPress={() => this.props.navigation.navigate("PersonalMessage", { name: message.name,response:message.response })}>
        <Card>
          <View style={{ margin: 10, borderRadius: 15, backgroundColor:"green"}}>
            <View style={styles.container} key={message}>
              <Text style={{ marginLeft: 5 }}>{message.name}</Text>
              <Text> ></Text>
            </View>
            <View>
              <Text>
                {message.response}
              </Text>
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