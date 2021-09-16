import { applyMiddleware, combineReducers, createStore } from 'redux';
import { userReducer } from './reducers/user_reducer/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
  user: userReducer
});
export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(thunk)));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch