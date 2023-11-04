import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers/Counter/CounterSlice';
// import textCounterReducer from "../features/textCounter/textCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    // textCounter: textCounterReducer
  },
});
