/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
*  NavigationPlayground
*/

/*import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNavigator from './src/NavigationPlayground/App';

class ReduxExampleApp extends Component {
  render() {
    return (
        <AppNavigator />
    );
  }
}

AppRegistry.registerComponent('ReactNavigationSamples', () => ReduxExampleApp);*/

// -----------------------------------------------------------------------------


/*
*  ReduxExample
*/

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducer from './src/ReduxExample/reducers';
import AppWithNavigationState from './src/ReduxExample/navigators/AppNavigator';

class ReduxExampleApp extends React.Component {
  store = createStore(AppReducer);

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNavigationSamples', () => ReduxExampleApp);