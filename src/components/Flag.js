import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}
      />
      <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 10,
    width: 1,
    backgroundColor: '#F22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 24,
    marginTop: 6,
  },
  flagBigger: {
    height: 10,
    width: 15,
    marginTop: 6,
    marginLeft: 10,
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginTop: 26,
    marginLeft: 20,
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginTop: 30,
    marginLeft: 16,
  },
});
