import { combineReducers } from 'redux';
import {StocksOrdersReducer} from './stocksOrdersReducer';
import { IStockOrderState } from '../store/store.interfaces';

export interface IAppState{
    stocksOrdersState: IStockOrderState
}
const reducers = combineReducers<IAppState>({
    stocksOrdersState: StocksOrdersReducer
})

export default reducers