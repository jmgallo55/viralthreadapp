import React, { Component } from 'react';
import { SafeAreaView, FlatList, Dimensions, TouchableHighlight, Text, Button, StyleSheet, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


//enable scroll view
const { height } = Dimensions.get('window');

export default class HomeScreen extends React.Component {

  state = {
    screenHeight: height,
  };
  onContentSizeChange = (contentWidth, contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };
  

  render() {
    //scroll view again
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1, backgroundColor: '#FFFFFF' }}
          contentContainerStyle={styles.scrollview}
          scrollEnabled={scrollEnabled}
          onContentSizeChange={this.onContentSizeChange}
        >
          <View style={{flex: 1, flexDirection: 'row' , flexWrap: 'wrap', alignContent: 'space-around'}}>
              <TouchableHighlight onPress={() => this.moveToGoogleTrending()}>
                <Image source={require('../static/images/google.png')} style={styles.imageSize}/>
              </TouchableHighlight> 
              <TouchableHighlight onPress={() => this.moveToFBTrending()}>
                <Image source={require('../static/images/FB.png')} style={styles.imageSize}/>
              </TouchableHighlight> 
              <TouchableHighlight onPress={() => this.moveToLinkedinTrending()}>
                <Image source={require('../static/images/linkedin.png')} style={styles.imageSize}/>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.moveToRedditTrending()}>
                <Image source={require('../static/images/reddit.png')} style={styles.imageSize}/>
              </TouchableHighlight> 
              <TouchableHighlight onPress={() => this.moveToYoutubeTrending()}>
                <Image source={require('../static/images/youtube.png')} style={styles.imageSize}/>
              </TouchableHighlight> 
              <TouchableHighlight onPress={() => this.moveToGoogleTrending()}>
                <Image source={require('../static/images/twitter.png')} style={styles.imageSize}/>
              </TouchableHighlight> 
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  imageSize: {
        width: 120, 
        height: 120,
    },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
   // backgroundColor: '#CDE3FB',
  },
});

