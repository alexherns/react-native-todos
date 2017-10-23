// @flow
import React from 'react';
import { View, StyleSheet } from 'react-native';

import MenuList from './MenuList';
import MenuTitle from './MenuTitle';

import type { List } from '../../reducer';

type Props = {
  lists: List[],
  selectedListId: string,
  onListSelect: string => void,
  newList: List => void,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

const Menu = ({
  lists,
  selectedListId,
  onListSelect,
  newList,
}: Props) => (
  <View style={styles.container}>
    <MenuTitle title="Lists" newList={newList} />
    <MenuList lists={lists} selectedListId={selectedListId} onListSelect={onListSelect} />
  </View>
);


export default Menu;
