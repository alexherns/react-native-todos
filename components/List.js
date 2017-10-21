// @flow
import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';
import { bindActionCreators } from 'redux';
import MyCheckbox from './Checkbox';
import Input from './Input';
import Footer from './Footer';
import * as actions from '../reducer';

import type { Item } from '../reducer';

type Props = {
  items: Item[],
  addToList: (Item) => void,
  clearCompleted: () => void,
  completeItem: string => void,
  removeFromList: string => void,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const List = ({
  items = [],
  addToList,
  clearCompleted,
  completeItem,
  removeFromList,
}: Props) => (
  <View style={styles.container}>
    <ScrollView>
      <Input
        onSubmit={addToList}
      />
      {items.map(item => (
        <MyCheckbox
          item={item}
          key={item.id}
          onComplete={() => completeItem(item.id)}
          onDelete={() => removeFromList(item.id)}
        />
      ))}
    </ScrollView>
    <Footer onPress={clearCompleted} />
  </View>);


const mapStateToProps = state => ({
  items: state.items,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addToList: actions.addToList,
  clearCompleted: actions.clearCompleted,
  completeItem: actions.completeItem,
  removeFromList: actions.removeFromList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
