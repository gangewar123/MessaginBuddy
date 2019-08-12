
import HomeScreen from "./HomeScreen";
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Chat from "./ChatScreen"
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
    
    HomeScreen: { screen: HomeScreen },
    Chat: { screen: Chat },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'HomeScreen') {
              iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
              IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'Chat') {
              iconName = `ios-options`;
            }
    
            // You can return any component that you like here!
            return <IconComponent name={iconName} size={25} color={tintColor} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
      
    
});
const TabBar = createAppContainer(TabNavigator);
export default TabBar;