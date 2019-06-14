import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import History from './components/History'
import AddEntry from './components/AddEntry'
import {purple, white } from './utils/colors'


const HistoryTab = createStackNavigator(
  {
    Feed: History,
    Profile: History,
  },
  {
    defaultNavigationOptions: {
      title: 'History',
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: white,
      },
    },
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === 'ios' && <FontAwesome name="plus-square" size={30} color={tintColor} />
      
    },
  }
);

const AddEntryTab = createStackNavigator(
  {
    Feed: AddEntry,
    Profile: AddEntry,
  },
  {
    defaultNavigationOptions: {
      title: 'Add Entry',
      headerTintColor: purple,
      headerStyle: {
        backgroundColor: white,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Add Entry!',
      tabBarIcon: ({ tintColor }) =>
        Platform.OS === 'ios' && <FontAwesome name="plus-square" size={30} color={tintColor} />
    },
  }
);

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator({ HistoryTab, AddEntryTab })
    : createMaterialTopTabNavigator({ HistoryTab, AddEntryTab });

//const Tabs = createBottomTabNavigator({ Home });
export default createAppContainer(Tabs);
