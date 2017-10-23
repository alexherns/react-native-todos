// @flow
import { combineReducers } from 'redux';

export type Item = {
  text: string,
  completed: boolean,
  id: string,
  createdAt: string,
}

export type List = {
  items: Item[],
  name: string,
  id: string,
}

export type State = {
  lists: List[],
  selectedList: string,
}

export const defaultState = {
  lists: [
    {
      items: [],
      name: 'Some list',
      id: '1234567890',
    },
    {
      items: [],
      name: 'Some other list',
      id: '1',
    },
  ],
  selectedList: '1234567890',
};

type Action<t> = {
    type: string,
    data?: t,
    list: string,
}

export const types = {
  ADD: 'ADD',
  CLEAR: 'CLEAR',
  COMPLETE: 'COMPLETE',
  DELETE_LIST: 'DELETE_LIST',
  NEW_LIST: 'NEW_LIST',
  SELECT_LIST: 'SELECT_LIST',
  REMOVE: 'REMOVE',
};

export const addToList = (item: Item, list: string): Action<Item> => ({
  type: types.ADD,
  data: item,
  list,
});

export const clearCompleted = (list: string): Action<*> => ({
  type: types.CLEAR,
  list,
});

export const completeItem = (id: string, list: string): Action<string> => ({
  type: types.COMPLETE,
  data: id,
  list,
});

export const deleteList = (list: string): Action<string> => ({
  type: types.DELETE_LIST,
  list,
});

export const newList = (list: List): Action<List> => ({
  type: types.NEW_LIST,
  data: list,
  list: list.id,
});

export const selectList = (list: string): Action<string> => ({
  type: types.SELECT_LIST,
  data: list,
  list,
});

export const removeFromList = (id: string, list: string): Action<string> => ({
  type: types.REMOVE,
  data: id,
  list,
});

export const itemsReducer = (items: Item[] = [], action: Action<*>) => {
  switch (action.type) {
    case types.ADD:
      return items.concat(action.data);
    case types.CLEAR:
      return items.filter(item => !item.completed);
    case types.COMPLETE:
      return items.map((item) => {
        if (item.id === action.data) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    case types.REMOVE:
      return items.filter(item => item.id !== action.data);
    default:
      return items;
  }
};

export const selectedListReducer = (list: string = '', action: Action<*>) => {
  switch (action.type) {
    case types.NEW_LIST:
    case types.SELECT_LIST:
      return action.list;
    case types.DELETE_LIST:
      return '';
    default:
      return list;
  }
};

export const listsReducer = (lists: List[] = [], action: Action<*>) => {
  if (action.type === types.NEW_LIST) {
    return [...lists].concat(action.data);
  }
  if (!lists || lists.length === 0) {
    return lists;
  }
  const foundIndex = lists.findIndex(i => i.id === action.list);
  if (foundIndex === -1) {
    return lists;
  }
  if (action.type === types.DELETE_LIST) {
    const newLists = [...lists];
    newLists.splice(foundIndex, 1);
    return newLists;
  }
  const foundList = lists[foundIndex];
  const revisedList = {
    ...foundList,
    items: itemsReducer(lists[foundIndex].items, action),
  };
  return [...lists.slice(0, foundIndex), revisedList, ...lists.slice(foundIndex + 1)];
};

export const reducer = combineReducers({
  items: itemsReducer,
  selectedList: selectedListReducer,
  lists: listsReducer,
});
