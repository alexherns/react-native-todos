// @flow
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  title: string,
  onMenuClick: () => void,
  onEditClick: () => void,
  displayEdit: boolean,
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#8ACEE9',
    flexDirection: 'row',
    height: 60,
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5,
  },
  titleWrapper: {
    alignItems: 'center',
    flex: 1,
    height: 60,
  },
  titleText: {
    fontSize: 20,
    color: 'white',
  },
  bumper: {
    width: 60,
  },
});

const Title = ({ title, onMenuClick, onEditClick, displayEdit }: Props) => (
  <View style={styles.navBar}>
    <View style={styles.bumper}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#8ACEE9"
        onPress={onMenuClick}
      >
        <Icon name="reorder" size={24} color="white" />
      </TouchableHighlight>
    </View>
    <View style={styles.titleWrapper}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.bumper}>
      {displayEdit ?
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#8ACEE9"
          onPress={onEditClick}
        >
          <Text style={styles.titleText}>Edit</Text>
        </TouchableHighlight> : null}

    </View>
  </View>
);

export default Title;
