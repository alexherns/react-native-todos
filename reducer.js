// @flow
import { combineReducers } from 'redux';

export type Item = {
  text: string,
  completed: boolean,
  id: string,
  createdAt: string,
}

export type State = {
  items: Item[],
}

export const defaultState = {
  items: [],
};

type Action<t> = {
    type: string,
    data?: t,
}

export const types = {
  ADD: 'ADD',
  CLEAR: 'CLEAR',
  COMPLETE: 'COMPLETE',
  REMOVE: 'REMOVE',
};

export const addToList = (item: Item): Action<Item> => ({
  type: types.ADD,
  data: item,
});

export const clearCompleted = (): Action<*> => ({
  type: types.CLEAR,
});

export const completeItem = (id: string): Action<string> => ({
  type: types.COMPLETE,
  data: id,
});

export const removeFromList = (id: string): Action<string> => ({
  type: types.REMOVE,
  data: id,
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

export const reducer = combineReducers({
  items: itemsReducer,
});
