/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {

  state={
    inputOne:0,
    inputTwo:0
  }
  //state maintained for two inputs

  componentWillMount(){
    // console.log(this.props)
  }

  func=()=>{

    console.warn("component")
    this.props.check(this.state.inputOne, this.state.inputTwo)
    // this.props.getFunction("123")
  }
  //function to check sum of two numbers

  render() {
    return (
      <View>
        <View>
        <Text>enter first number</Text>
        <TextInput
        onChangeText={(text) => this.setState({inputOne: parseInt(text)})}
        value={this.state.inputOne}
        />
        </View>

        <View>
        <Text>enter second number</Text>
        <TextInput
        onChangeText={(text) => this.setState({inputTwo: parseInt(text)}) }
        value={this.state.inputTwo}
        />
        </View>
        <View>
        <Button
        title="ADD"
        onPress={()=> this.func()}
        />
        </View>
        <View >
        <Text>{this.props.result}</Text>
        </View>
      </View>
    );
  }
}
  