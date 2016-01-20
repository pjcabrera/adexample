/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

require('./shim');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

let styles = React.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { messages: [] }
  }

  componentDidMount() {
    let self = this
    let preservedConsoleLog = console.log;
    console.log = (msg) => {
      self.setState({ messages: [...self.state.messages, msg] })
      preservedConsoleLog(msg);
    }

    console.time = (msg) => {
      preservedConsoleLog('time:', msg)
    }

    console.timeEnd = (msg) => {
      preservedConsoleLog('timeEnd:', msg)
    }

    require('asyncstorage-down/test/test')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.messages.join('\n')}</Text>
      </View>
    )
  }
}

React.AppRegistry.registerComponent('adexample', () => App)
