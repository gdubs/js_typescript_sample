import { IStock, IOrder } from "../services/domain.interfaces";
import { Reducer } from 'redux';
import { IStockOrderState, StockOrderActionConstants } from "../store/store.interfaces";
import { IStockOrder_GetStocks_Action, IStockOrder_GetStockByCode_Action, IStockOrder_NewOrder_Action, IStockOrder_GetOrders_Action } from "../store/actionTypes.interfaces";
import { uuid } from "../helpers/helpers";

const initState : IStockOrderState = {
    stocks : [],
    orders : [],
    stocksPageUI: { pageNumber: 1, pageCount: 15, totalPageNumber: 0 },
    ordersPageUI: { pageNumber: 1, pageCount: 15, totalPageNumber: 0 }
}

// combine actions into one type
export type  IStocksOrdersActions = IStockOrder_GetStocks_Action | IStockOrder_GetStockByCode_Action | IStockOrder_NewOrder_Action | IStockOrder_GetOrders_Action;

// TODO: should not be any, make it so that on initial state you can accept undefined or null
export const StocksOrdersReducer: Reducer<IStockOrderState, IStocksOrdersActions | any> = (
    state = initState,
    action
) => {
    let idx, order;

    switch(action.type){
        
        case StockOrderActionConstants.GET_STOCKS:
            console.log('get_stocks reducer')
            console.log(action.payload)
            return {
                ...state,
                stocks: action.payload.stocks,
                stocksPageUI: action.payload.stocksPageUI
            }
        case StockOrderActionConstants.NEW_ORDER:
            const newId = uuid();
            const newOrder = { ...action.payload, id: newId }
        
            return {
                ...state,
                orders: [
                    ...state.orders.slice(0, state.orders.length),
                    newOrder
                ]
            }

        case StockOrderActionConstants.REMOVE_ORDERS:
            // remove orders
            const updatedOrders = state.orders.filter(o => !action.payload.includes(o));

            return {
                ...state,
                orders: updatedOrders
            }
        case StockOrderActionConstants.SELECT_ORDER:
            idx = state.orders.findIndex(o => o.id == action.payload.id);
            
            order = state.orders[idx];
            order = { ...order, isSelected: !order.isSelected};

            return{
                ...state,
                orders:[
                    ...state.orders.slice(0, idx),
                    order,
                    ...state.orders.slice(idx + 1)
                ]
            }
        case StockOrderActionConstants.UPDATE_ORDER:

            idx = state.orders.findIndex(o => o.id == action.payload.id);
            
            const order  = {
                ...action.payload,
                isSelected: false
            }

            return{
                ...state,
                orders:[
                    ...state.orders.slice(0, idx),
                    order,
                    ...state.orders.slice(idx + 1)
                ]
            }
        case StockOrderActionConstants.GET_ORDERS:
        default:
            return state;
    }
    
}
