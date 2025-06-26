
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '.';

//if we use configurestore it will built redux thunk by default
const store = configureStore({
  reducer: rootReducer,
});

export default store;

//If you want add redux thunk yourself
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer'; // your combined reducers

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunk),
// });

// export default store;

