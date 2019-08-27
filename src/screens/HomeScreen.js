import { View, Text, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";


export default class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
      headerLeft: <MenuButton onPress={() => navigation.openDrawer()} />,
      headerTitle: <Logo />,
      headerBackTitle: "Home",
      headerLayoutPreset: "center",
      drawerIcon: ({ tintColor }) => (
        <Image
          source={require('../../static/images/google.png')}
          style={styles.icon}
        />
      ),
    });

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! Welcome to my homepage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 20,
    height: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
