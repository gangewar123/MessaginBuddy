/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './component/HomeScreen';
import PersonalMessage from './component/personal_message';
import ChatScreen from "./component/ChatScreen"


const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
});

const ChatStack = createStackNavigator({
  Chat: { screen: ChatScreen },

});
const PersonalMessageStack = createStackNavigator({
  PersonalMessage: {
    screen: PersonalMessage,
  }

});




const tabbar = createBottomTabNavigator({

  Buddy: { screen: HomeStack, },
  Chat: { screen: ChatStack },

},
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      activeBackgroundColor: '#34ecaa',
      allowFontScaling: true,
      inactiveTintColor: 'gray',
      focused: true,
      keyboardHidesTabBar: true,
      style: {
        // fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: 'center',
      },



    },
  });


const applictionlayer = createStackNavigator(
  {
    Tabs: tabbar,
    PersonalMessage: {
      screen: PersonalMessageStack
    }
  },
  {
    headerMode: "none"
  }




  /* any other route you want to render above the tab bar */
);

const App = createAppContainer(applictionlayer);


export default App;
