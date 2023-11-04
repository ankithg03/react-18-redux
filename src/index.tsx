import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './core/config/reportWebVitals';

/** Redux Code Starts */
import { Provider } from 'react-redux'
import store from './custom/Redux/Store';
/** Redux Code End */

/** 
 * @package
 * ProductComponentsAppimport ProductComponentsApp from './ProductComponents/App';
 **/
import App from './custom/Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    {
    /**
      * @package ProductComponentsApp
      * <ProductComponentsApp /> 
      **/
     /** Added Reducer Store via Provider */
    }
    <Provider store={store}><App /></Provider>
  </React.StrictMode>
);

reportWebVitals();
