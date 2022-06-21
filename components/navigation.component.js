import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { default as NavigationEnum } from '../enums/navigation.enum';

import { HomeScreen } from './screens/homeScreen.component';
import { HealthScreen } from './screens/healthScreen.component';
import { DiceScreen } from './screens/diceScreen.component';

export class Navigation extends React.Component {
  constructor() {
    super();
    this.Tab = createBottomTabNavigator();
  }

  render() {
    return (
      <this.Tab.Navigator initialRouteName="Home" backBehavior="history">
        <this.Tab.Screen name={NavigationEnum.Home} component={HomeScreen} options={{ tabBarIcon: () => getIconComponent('home') }} />
        <this.Tab.Screen name={NavigationEnum.Health} component={HealthScreen} options={{ tabBarIcon: () => getIconComponent('heart') }} />
        <this.Tab.Screen name={NavigationEnum.Dice} component={DiceScreen} options={{ tabBarIcon: () => getIconComponent('dice') }} />
      </this.Tab.Navigator>
    );
  }
}

function getIconComponent(name, size = 25) {
  return <Icon name={name} size={size} />;
}
