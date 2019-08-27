import { View, Dimensions, Text, TouchableHighlight, StyleSheet, FlatList, ListItem } from "react-native";
import { Card  } from "react-native-elements";
import React, { Component } from "react";
import { MenuButton, Logo } from "../components/header/header";
import { HeaderBackButton } from "react-navigation";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class GoogleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      headerTitle: <Logo />,
      headerBackTitle: "Google",
      headerLayoutPreset: "center"
    };
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[{title: 'Google Item with really long meaningless name that no one will read because it is too long', key: 'item1'}, 
          {title: 'Google Item2', key: 'item2'}, {title: 'Google Item3', key: 'item3'}, 
          {title: 'Google Item4', key: 'item4'}, {title: 'Google Item5', key: 'item5'}, 
          {title: 'Google Item6', key: 'item6'}]}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              onPress={() => this._onPress(item)}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={styles.card}>
                  <Card>
                  <Text>{item.title}</Text>
                  </Card>
              </View>
            </TouchableHighlight>
            )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  card: {
    backgroundColor: 'white',
    width: width,
    textAlign: 'center',
  }
});
