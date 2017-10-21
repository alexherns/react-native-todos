import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

type Props = {
  onPress: () => void,
}

const styles = StyleSheet.create({
  footerBar: {
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    paddingTop: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  footerText: {
    color: 'red',
    fontSize: 14,
  },
});

const Footer = ({ onPress }: Props) => (
  <TouchableHighlight
    activeOpacity={0.5}
    underlayColor="white"
    onPress={onPress}
  >
    <View style={styles.footerBar}>
      <Text style={styles.footerText}>Remove completed items</Text>
    </View>
  </TouchableHighlight>
);

export default Footer;
