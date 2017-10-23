import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

type Props = {
  onPress: () => void,
  message: string,
  style: 'secondary' | 'primary',
}

const styles = StyleSheet.create({
  footerBar: {
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  footerText: {
    fontSize: 14,
  },
  primaryWrapper: {
    backgroundColor: 'white',
  },
  secondaryWrapper: {
    backgroundColor: 'red',
  },
  primaryText: {
    color: 'red',
  },
  secondaryText: {
    color: 'white',
  },
});

const Footer = ({ onPress, message, style }: Props) => (
  <TouchableHighlight
    activeOpacity={0.5}
    underlayColor="white"
    onPress={onPress}
  >
    <View style={[styles.footerBar, style === 'primary' ? styles.primaryWrapper : styles.secondaryWrapper]}>
      <Text style={[styles.footerText, style === 'primary' ? styles.primaryText : styles.secondaryText]}>{message}</Text>
    </View>
  </TouchableHighlight>
);

export default Footer;
