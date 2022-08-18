// import { applyMiddleware, combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import userReducer from './reducers/user';

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
