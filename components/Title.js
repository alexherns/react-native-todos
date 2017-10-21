// @flow
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

type Props = {
  title: string,
}

const styles = StyleSheet.create({
  navBar: {
    alignItems: 'center',
    backgroundColor: '#8ACEE9',
    height: 60,
    paddingTop: 24,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
});

const Title = ({ title }: Props) => (
  <View style={styles.navBar}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

export default Title;
