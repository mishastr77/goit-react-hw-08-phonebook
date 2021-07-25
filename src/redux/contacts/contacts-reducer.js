import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactSuccess,
  fetchContactRequest,
  fetchContactError,
  filterChange,
} from "./contacts-actions";
/* import initialContacts from "../../Data/initialContacts.json"; */

const items = createReducer(/* initialContacts */ [], {
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [fetchContactSuccess]: (_, { payload }) => payload,
});

const filter = createReducer("", {
  [filterChange]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});

/* const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
}; */

/* const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.FILTER_CHANGE:
      return payload;

    default:
      return state;
  }
}; */
