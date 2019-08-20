
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

//import your tabs js file
import addnane from "./screens/addname";
import settings from "./screens/settings";
import home from "./screens/home";

const TabNavigator = createBottomTabNavigator({
  Home: home,
  Generate: addnane,
  Settings: settings,
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});


export default createAppContainer(TabNavigator);