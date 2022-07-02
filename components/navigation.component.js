import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { default as NavigationEnum } from '../enums/navigation.enum';

import { HomeScreen } from './screens/homeScreen.component';
import { StatScreen } from './screens/statScreen.component';
import { DiceScreen } from './screens/diceScreen.component';
import { SpellsScreen } from './screens/spellsScreen.component';

/**
 * Function for creating FontAwesome <Icon> component.
 *
 * Used in navigation bar to display some nice icons.
 * @param {string} name Name of the icon (from the list of available ones).
 * @param {number} size Size of the icon (both width and height).
 * @param {string} color Color of the icon (from the list of available ones).
 * @param {boolean} solid Whether to use a solid or hollow/transparent version of the icon.
 *
 * @author Michał Tangri - 18505
 * @see https://github.com/oblador/react-native-vector-icons
 * @see https://reactnative.dev/docs/colors
 * */
function getIconComponent(name, size = 25, color = 'crimson', solid = true) {
  return <Icon name={name} size={size} color={color} solid={solid} />;
}

/**
 * Navigation component that is automatically pasted into all the screens.
 *
 * Allows users to switch between different screens using a bar at the bottom
 * of the screen.
 *
 * @version 1.2.0
 * @author Michał Tangri - 18505
 * @see https://reactnavigation.org/docs/bottom-tab-navigator/
 */
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
          name={NavigationEnum.Stats}
          component={StatScreen}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('chart-pie') }}
        />
        <this.Tab.Screen
          name={NavigationEnum.Dice}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('dice') }}
          component={DiceScreen}
        />
        <this.Tab.Screen
          name={NavigationEnum.Spells}
          options={{ header: () => null, tabBarIcon: () => getIconComponent('fire') }}
          component={SpellsScreen}
        />
      </this.Tab.Navigator>
    );
  }
}
