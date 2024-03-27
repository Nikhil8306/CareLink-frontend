/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// importing the redux library to wrap the whole app
import {Provider} from 'react-redux';

import {store} from '../CareLink/src/pages/store/index.js';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
