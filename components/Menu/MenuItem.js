// @flow
import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import type { List } from '../../reducer';

type Props = {
  selected: boolean,
  item: List,
  onSelect: string => void,
}

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
  selected: {
    backgroundColor: '#F3F4F4',
  },
  selectedText: {
    color: '#3A9BFC',
  },
});

const MenuItem = ({
  selected,
  item,
  onSelect,
}: Props) => (
  <TouchableHighlight
    activeOpacity={0.5}
    underlayColor="white"
    onPress={onSelect}
  >
    <View style={[styles.wrapper, selected ? styles.selected : null]}>
      <Text style={[styles.itemText, selected ? styles.selectedText : null]}>{item.name}</Text>
    </View>
  </TouchableHighlight>
);

export default MenuItem;
