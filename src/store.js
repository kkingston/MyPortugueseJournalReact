import { applyMiddleware, createStore, combineReducers } from 'redux';
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm
})

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
