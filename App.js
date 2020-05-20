import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './src/screen/WelcomeScreen';
import HomeNavigator from './src/screen/HomeNavigator';
import Profile from './src/screen/Profile';
import BalanceScreen from './src/screen/BalanceScreen';
import DiamondScreen from './src/screen/DiamondScreen';
const Stack = createStackNavigator();
console.disableYellowBox = true;
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'WelcomeScreen'} headerMode={'none'}>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            headerStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen
          name="BalanceScreen"
          component={BalanceScreen}
          options={{
            headerStyle: {
              display: 'none',
            },
          }}
        />
        <Stack.Screen
          name="DiamondScreen"
          component={DiamondScreen}
          options={{
            headerStyle: {
              display: 'none',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
