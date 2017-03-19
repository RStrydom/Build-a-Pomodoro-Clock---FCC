import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.timer}>
            <Text>25</Text>.<Text style={styles.timerSeconds}>00</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: '#FFF',
    fontSize: 70,
    fontFamily: 'sans-serif-light',
    fontWeight: '300',
  },
  timerSeconds: {
    fontSize: 50,
  },
});
