import React from "react";
import { Dimensions } from 'react-native';
import { createDrawerNavigator, CustomDrawerComponent, createAppContainer } from "react-navigation";
import BottomTabNavigator from "./bottom-tab-navigator";
import { GoogleNavigator } from "./screen-stack-navigators";

//const {width} = Dimensions.get('window')
const DrawerNavigator = createDrawerNavigator({
  Home: BottomTabNavigator,
  Google: GoogleNavigator 
 },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
});

const Drawer = createAppContainer(DrawerNavigator);

export default Drawer;
