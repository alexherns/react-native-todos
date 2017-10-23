// @flow
import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from './List';
import Menu from './Menu/Menu';
import Title from './Title';
import Footer from './Footer';
import * as actions from '../reducer';

import type { State, List as ListType } from '../reducer';

type Props = {
  lists: ListType[],
  selectedListId: string,
  selectList: string => void,
  newList: ListType => void,
  clearCompleted: (string) => void,
  deleteList: string => void,
}

type MainState = {
  editing: boolean
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  overlayWrapper: {
    backgroundColor: 'black',
    flex: 1,
  },
});

class Main extends React.Component<{}, Props, MainState> {
  static defaultProps = {}
  state = {
    editing: false,
  }
  _drawer = {}

  closeControlPanel = () => {
    this._drawer.close();
  };

  openControlPanel = () => {
    this._drawer.open();
  };

  attemptDelete = () => {
    Alert.alert(
      'Are you sure you want to delete this list?',
      '',
      [
        {
          text: 'Cancel',
          onPress: () => this.setState({ editing: false }),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            this.setState({ editing: false });
            this.props.deleteList(this.props.selectedListId);
            this._drawer.open();
          },
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  }

  render() {
    const { lists, selectedListId, selectList } = this.props;
    const [selectedList] = lists.filter(list => list.id === selectedListId);
    return (
      <View style={styles.overlayWrapper}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          openDrawerOffset={0.2}
          tapToClose
          tweenDuration={200}
          tweenHandler={ratio => ({
          main: { opacity: (3 - ratio) / 3 },
        })}
          content={
            <Menu
              selectedListId={selectedListId}
              lists={lists}
              onListSelect={(id) => { selectList(id); this.closeControlPanel(); }}
              newList={(list) => {
                this.props.newList(list);
                this.closeControlPanel();
              }}
            />}
        >
          <View style={styles.container}>
            <Title
              displayEdit={!!selectedList}
              title={selectedList ? selectedList.name : 'Create a new list'}
              onEditClick={() => this.setState({ editing: !this.state.editing })}
              onMenuClick={this.openControlPanel}
            />
            {!selectedList ? null :
            <View style={styles.container}>
              <List list={selectedList} />
              <Footer
                onPress={() => {
                if (this.state.editing) {
                  this.attemptDelete();
                } else {
                  this.props.clearCompleted(selectedListId);
                }
              }}
                message={this.state.editing ? 'Delete List' : 'Clear completed items'}
                style={this.state.editing ? 'secondary' : 'primary'}
              />
            </View>
            }
          </View>
        </Drawer>
      </View>
    );
  }
}

const mapStateToProps = (state: State) => ({
  lists: state.lists,
  selectedListId: state.selectedList,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  clearCompleted: actions.clearCompleted,
  deleteList: actions.deleteList,
  newList: actions.newList,
  selectList: actions.selectList,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
