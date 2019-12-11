import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Header from './Header';

const Loading = props => (
    <View>
      <Header isRefresh={true}/>
      <Text style={styles.counter}>{props.amount + 1}</Text>
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
      </View>
    </View>
)

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: window.height
  },
  title: {
    fontSize: 30
  },
  counter: {
    position: 'absolute',
    fontSize: 12,
    left: 11,
    top: 10
  }
})

export default Loading;
