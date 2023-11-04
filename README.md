# Redux

### Redux Installation

```
npm install @reduxjs/toolkit react-redux

# Yarn
yarn add @reduxjs/toolkit react-redux
```

### Creating Provider
* `Provider`: The `<Provider>` component makes the Redux store available to any nested components that need to access the Redux store.
* `configureStore()`: wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, add whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

### `index.js`
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/config/reportWebVitals';

/** Redux Code Starts */
import { Provider } from 'react-redux'
import store from './custom/Redux/Store';
/** Redux Code End */

import App from './custom/Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    {/** Added Reducer Store via Provider */}
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

reportWebVitals();
```
### `store.js` contains the combination of all store reducers

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Reducers/Counter/CounterSlice';
import textCounterReducer from "../features/textCounter/textCounterSlice";
/* . . . imports of other reducers */
export default configureStore({
  reducer: {
    counter: counterReducer,
    . . .
    textCounter: textCounterReducer
  },
});

```

### `reducerSlice` - Contains the action and methods which alters the state of the redux

```
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectCount = state => state.counter.value;

export default slice.reducer;

```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
