import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Finder from './app/Finder';
import Chat from './app/Chat';
import Notification from './app/Notification';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Fonts} from '../helpers/Config';
const Tab = createBottomTabNavigator();

export default function HomeNaigator() {
  return (
    <Tab.Navigator
      initialRouteName="Finder"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Finder') {
            iconName = focused ? 'cards' : 'cards-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'forum' : 'forum-outline';
          } else if (route.name === 'Notification') {
            iconName = focused ? 'bell-ring' : 'bell-ring-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'grey',
        activeTintColor: 'black',
        showIcon: true,
        labelStyle: {fontSize: 13, fontFamily: Fonts.Bold},
      }}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Finder" component={Finder} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  );
}
