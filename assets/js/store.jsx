import {createStore, combineReducers} from 'redux';
import deepFreeze from 'deep-freeze';

function token(state = null, action) {
  switch(action.type) {
    case 'SET_TOKEN':
      return action.token
    default:
      return state;
  }
}

let empty_login = {
  name: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch(action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data)
    default:
    return state;
  }
}

function users(state = [], action) {
  switch(action.type) {
    case 'USERS_LIST':
      return [...action.users]
    default: return state
  }
}

function tasks(state = [], action) {
  switch(action.type) {
    case 'TASKS_LIST':
      return [...action.tasks]
    case 'ADD_TASK':
      return [action.task, ...state]
    default: return state
}
}

let empty_form = {
  user_id: "",
  title: "",
  body: "",
  assigned_id: "",
  completed: false,
  time_taken: "",
};

function form(state = empty_form, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return Object.assign({}, state, action.data);
    case "CLEAR_FORM":
      return Object.assign({}, state, empty_form);
    case "SET_TOKEN":
      return Object.assign({}, state, { token: action.token.token });
    default:
      return state;
  }
}

function root_reducer(state0, action) {
  console.log("state0", state0);
  console.log("action", action);
  let reducer = combineReducers({users, tasks, form, login, token});
  let state1 = reducer(state0, action);
  return deepFreeze(state1);
}

let store = createStore(root_reducer);

export default store;
