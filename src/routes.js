/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from '~/pages/Main';
import AddConstruct from '~/pages/AddConstruct';
import Inicío from '~/pages/HomeProject';
import Pessoas from '~/pages/Peoples';
import Metas from '~/pages/Objectives';
import Configurações from '~/pages/Edit';
import { colors } from '~/styles';

const margin = 5;
const Project = createBottomTabNavigator(
  {
    Inicío,
    Pessoas,
    Metas,
    Configurações,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        switch (routeName) {
          case 'Inicío':
            return (
              <Icon
                name="home"
                size={focused ? 35 : 30}
                color={tintColor}
                style={{ marginTop: Platform.OS === 'ios' ? 0 : margin }}
              />
            );
          case 'Pessoas':
            return (
              <Icon
                name="worker"
                size={focused ? 38 : 35}
                color={tintColor}
                style={{ marginTop: Platform.OS === 'ios' ? 0 : margin }}
              />
            );
          case 'Metas':
            return (
              <Icon
                name="marker-check"
                size={focused ? 32 : 30}
                color={tintColor}
                style={{ marginTop: Platform.OS === 'ios' ? 0 : margin }}
              />
            );
          case 'Configurações':
            return (
              <Icon
                name="wrench"
                size={focused ? 35 : 30}
                color={tintColor}
                style={{ marginTop: Platform.OS === 'ios' ? 0 : margin }}
              />
            );
          default:
            break;
        }
      },
    }),
    tabBarOptions: {
      labelStyle: {
        fontSize: 14,
        margin: 0,
      },
      activeTintColor: 'white',
      inactiveTintColor: colors.lighter,
      tabStyle: {
        backgroundColor: colors.primary,
        height: Platform.OS === 'ios' ? 55 : null,
      },
    },
  },
);

const Routes = createAppContainer(createStackNavigator({
  Main,
  AddConstruct,
  Project: {
    screen: Project,
    navigationOptions: {
      headerTitle: 'Visão Geral',
    },
  },
}, {
  initialRouteName: 'Project',
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTitleStyle: {
      color: colors.white,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    headerTintColor: 'white',
  },
}));

export default Routes;
