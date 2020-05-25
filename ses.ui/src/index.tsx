import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app';

import { Provider, connect, ConnectedProps } from 'react-redux';
import configureStore from '../src/store/store';
import { compose, AnyAction, Store } from 'redux';
import { IAppState } from './reducers/reducers';

import { BrowserRouter as Router} from 'react-router-dom';

interface IProps {
  store: Store<IAppState>;
}

const Root: React.SFC<IProps> = props => {
  return(
    <Provider store={props.store}>
        <App />
    </Provider>
  )
}


const store = configureStore();

ReactDOM.render(
      <Root store={store}/>,
    document.getElementById("app")
)