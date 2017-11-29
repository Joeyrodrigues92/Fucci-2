import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Navigator } from 'react-native';
import { Button } from './components/common';
import ActGameList from './components/ActGameList';

export default class App extends Component<{}> {
  
  handleGuest() {
      this.props.navigator.push({
      title: 'Games',
      component: ActGameList
    }) 
    //console.log('lit');
  }
  render() {
    return (
      <View style={styles.container} >
        <Text >
          Welcome to Fucci!
        </Text>
        <Button onPress={this.handleGuest}>
          Start
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'red',
  },
  welcome: {
    fontSize: 20,
    marginBottom: 50,
  }
});

//style={styles.welcome}