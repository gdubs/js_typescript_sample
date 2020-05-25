import {createStore, applyMiddleware, compose, Store} from 'redux';
// import thunkMiddleware from redux-thunk';
import thunk from 'redux-thunk';
import reducers, { IAppState } from '../reducers/reducers';
import { IStockOrderState } from './store.interfaces';

// const middleWare = applyMiddleware(thunkMiddleware);
// const composedEnhancers = compose(middleWare);

// const store = storeWithMiddleWare(StocksOrdersReducer, undefined, );
// const store = createStore(reducers, undefined, composedEnhancers);

// export default store;

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(reducers, undefined, applyMiddleware(thunk));
    return store;
  }