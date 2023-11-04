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
* 
```
import { hydrateRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit' /*importing configureStore */
import { Provider } from 'react-redux'/*importing Provider */

const preloadedState = window.__PRELOADED_STATE__

const clientStore = configureStore({
  reducer: rootReducer,
  preloadedState,
})

hydrateRoot(
  document.getElementById('root'),
  <Provider store={clientStore} serverState={preloadedState}>
    <App />
  </Provider>
)
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
