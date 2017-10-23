// @flow
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import MyCheckbox from './Checkbox';
import Input from './Input';
import * as actions from '../reducer';

import type { List as ListType, Item } from '../reducer';

type Props = {
  list: ListType,
  addToList: (Item, string) => void,
  completeItem: (string, string) => void,
  removeFromList: (string, string) => void,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const List = ({
  list,
  addToList,
  completeItem,
  removeFromList,
}: Props) => (
  <View style={styles.container}>
    <ScrollView>
      {list.items.map(item => (
        <MyCheckbox
          item={item}
          key={item.id}
          onComplete={() => completeItem(item.id, list.id)}
          onDelete={() => removeFromList(item.id, list.id)}
        />
      ))}
      <Input
        onSubmit={item => addToList(item, list.id)}
      />
    </ScrollView>
  </View>);


const mapDispatchToProps = dispatch => bindActionCreators({
  addToList: actions.addToList,
  clearCompleted: actions.clearCompleted,
  completeItem: actions.completeItem,
  removeFromList: actions.removeFromList,
}, dispatch);

export default connect(() => ({}), mapDispatchToProps)(List);
