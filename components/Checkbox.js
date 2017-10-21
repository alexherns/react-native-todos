// @flow
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';

import type { Item } from '../reducer';

const styles = StyleSheet.create({
  itemRow: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    padding: 15,
  },
  completeRow: {
    color: 'darkgrey',
    fontStyle: 'italic',
  },
  left: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    flex: 0.25,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});

type Props = {
  item: Item,
  onComplete: () => void,
  onDelete: () => void,
}

export default ({
  item: {
    text,
    completed,
    createdAt,
  },
  onComplete,
  onDelete,
}: Props) => (
  <Swipeout
    autoClose
    backgroundColor="white"
    left={[{
      backgroundColor: '#80C21E',
      onPress: onComplete,
      text: 'Finish',
    }]}
    right={[{
      backgroundColor: '#EA453E',
      onPress: onDelete,
      text: 'Remove',
    }]}
  >
    <View style={styles.itemRow}>
      <View style={styles.left}>
        <Text style={[styles.itemText, completed ? styles.completeRow : {}]}>{text}</Text>
      </View>
      <View style={styles.right}>
        <Text>{new Date(createdAt).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}
        </Text>
      </View>
    </View>
  </Swipeout>
);
