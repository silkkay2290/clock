import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {


  constructor(props){ 
    super(props) //have to call super since it extends 
    this.state = {date: new Date}
  }

  componentDidMount(){
    this.Timer = setInterval(() => {this.tick()}, 1000);
  } //updates clock by 1 seconds

  tick(){
    this.setState({
      date: new Date()
    })
  }

  componentWillUnmount() {
    clearInterval(this.Timer)
  }
  render() {
    return (
      <View style={styles.container}>  
        <Text>The current Time is :  
          {this.state.date.toLocaleTimeString()}
       </Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


