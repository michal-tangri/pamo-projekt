import React from 'react';
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
        <this.Tab.Screen
          name={NavigationEnum.Home}
          component={HomeScreen}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('home') }}
        />
        <this.Tab.Screen
          name={NavigationEnum.Health}
          component={HealthScreen}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('heart') }}
        />
        <this.Tab.Screen
          name={NavigationEnum.Dice}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('dice') }}
          component={DiceScreen}
        />
      </this.Tab.Navigator>
    );
  }
}

function getIconComponent(name, size = 25, color = 'crimson', solid = true) {
  return <Icon name={name} size={size} color={color} solid={solid} />;
}
