// @flow
import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import MenuItem from './MenuItem';

import type { List } from '../../reducer';

type Props = {
  lists: List[],
  selectedListId: string,
  onListSelect: string => void,
}

const styles = StyleSheet.create({
  wrapper: {},
});

const MenuList = ({
  lists,
  selectedListId,
  onListSelect,
}: Props) => (
  <ScrollView style={styles.wrapper}>
    {lists.map(list => (
      <MenuItem
        key={list.id}
        item={list}
        selected={selectedListId === list.id}
        onSelect={() => onListSelect(list.id)}
      />
      ))}
  </ScrollView>
);

export default MenuList;
