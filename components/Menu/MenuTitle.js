// @flow
import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import type { List } from '../../reducer';

type Props = {
  title: string,
  newList: List => void,
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingTop: 48,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  titleText: {
    fontSize: 24,
    color: 'black',
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    // width: 65,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const MenuTitle = ({ title, newList }: Props) => (
  <View style={styles.row}>
    <View style={styles.left}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="white"
      onPress={() => newList({
        id: Math.random().toString(),
        name: 'New List',
        items: [],
      })}
    >
      <View style={styles.right}>
        <Icon name="add" size={30} />
      </View>
    </TouchableHighlight>
  </View>
);

export default MenuTitle;
