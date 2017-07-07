import React, { Component } from 'react';
import {StackNavigator,TabNavigator,DrawerNavigator} from 'react-navigation';
import Home from '../sreens/Home.js';
import Detail from '../sreens/Detail.js';
import User from '../sreens/User.js';
import Menu from '../sreens/Menu.js';
import HuyHoang from './HuyHoang.js';
import ListView1 from '../sreens/ListView.js';

export const HomeStack = StackNavigator({
  ManHinh_Home:{
    screen: Home,
    navigationOptions:{
      title: 'Trang chu'
    }
  },
  ManHinh_Detail:{
    screen: Detail,
    navigationOptions:{
      title: 'Chi tiet'
    }
  },
  ManHinh_Menu:{screen: Menu},
  ManHinh_HuyHoang:{screen: HuyHoang},
  ManHinh_ListView:{screen: ListView1},
});

export const UserStack = StackNavigator({
  ManHinh_User:{
    screen:User,
    navigationOptions:{
      title: 'Tai khoan'
    }
  },
});

export const TabbarA = TabNavigator(
  {
    HomeS:{
      screen: HomeStack,
      navigationOptions:{
        tabBarLabel: 'HOME'
      }
    },
    UserS:{
      screen: UserStack,
      navigationOptions:{
        tabBarLabel: 'USER'
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    swipeEnabled : true,
    tabBarOptions: {
      style: {
        backgroundColor: '#dddddd'
      },
      inactiveTintColor: 'green',
      activeTintColor :'red',
    }
  }
);

export const SideMenu = DrawerNavigator(
  {
    Tabbar:{
      screen: TabbarA
    },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
  }
);