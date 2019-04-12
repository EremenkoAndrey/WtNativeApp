import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import { Root } from 'native-base';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { RootNavigator } from './src/navigation';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore(
    composeWithDevTools(
        applyMiddleware(
            thunk
        )
    )
);


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Root>
            <StatusBar barStyle="dark-content" />
            <RootNavigator />
          </Root>
        </Provider>
    );
  }
}

