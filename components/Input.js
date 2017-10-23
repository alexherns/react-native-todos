// @flow
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import type { Item } from '../reducer';

type Props = {
  onSubmit: (Item) => void,
}

type State = {
  text: '',
}

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: 'lightgrey',
  },
  textInput: {
    fontSize: 18,
  },
});

class Input extends React.Component<{}, Props, State> {
  static defaultProps = {
  }
  state = {
    text: '',
  }

  render = () => (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter an item..."
        onChangeText={text => this.setState({ text })}
        onSubmitEditing={() => {
          this.props.onSubmit({
            createdAt: new Date().toString(),
            completed: false,
            text: this.state.text,
            id: Math.random().toString() });
          // $FlowFixMe
          this.textInput.setNativeProps({ text: '' });
        }}
        // $FlowFixMe
        ref={(component) => { this.textInput = component; }}
      />
    </View>
  )
}

export default Input;
