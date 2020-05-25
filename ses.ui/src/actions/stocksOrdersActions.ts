import { StockOrderActionConstants, IStockOrderState } from "../store/store.interfaces";
import { IStockOrder_GetStocks_Action, IStockOrder_GetStockByCode_Action, IStockOrder_NewOrder_Action, IStockOrder_GetOrders_Action, IStockOrder_SelectOrder_Action, IStockOrder_BookOrders_Action, IStockOrder_RemoveOrders_Action, IStockOrder_UpdateOrder_Action } from "../store/actionTypes.interfaces"
import { IOrder, IStock, OrderStatus } from "../services/domain.interfaces"
import * as StockService from "../services/stocks-service"

import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction, ActionCreator, Dispatch} from 'redux';

import axios from 'axios';

export const GetStockBy = (stock_code: string) : IStockOrder_GetStockByCode_Action => {
    return {
        type: StockOrderActionConstants.GET_STOCK,
        payload: stock_code
    }
}

export const GetStocks: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_GetStocks_Action
>> = (pageNumber: number, pageSize: number) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>): Promise<void> => {
            const stocks = await StockService.GetStocks(pageNumber, pageSize);
            console.log('get stocks')
            dispatch({
                type: StockOrderActionConstants.GET_STOCKS,
                payload: { stocks: stocks.data.body.data, stocksPageUI: { pageNumber: stocks.data.body.page, pageSize: stocks.data.body.count, totalPageNumber: stocks.data.body.totalPages } }
            });
    }
}

export const GetStocksHardCode: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_GetStocks_Action
>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: StockOrderActionConstants.GET_STOCKS,
            payload: [{ stockId: 'TEST', name: 'Test', bloombergTicker: 'TICK', bloombergTickerLocal: 'TICK', price: 10,ric: 'HHH', country: 'Country', currency: 'USD'}]
        });
    }
    
}

export const NewOrder : ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_NewOrder_Action
>> = (order: IOrder) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: StockOrderActionConstants.NEW_ORDER,
            payload: order
        });
    }
}

export const GetOrders : ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_GetOrders_Action
>> = () => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: StockOrderActionConstants.GET_ORDERS
        });
    }
}

export const SelectOrder: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_SelectOrder_Action
>> = (order: IOrder) => {
    return async (dispatch: Dispatch) => {
        console.log('select order')
        dispatch({
            type: StockOrderActionConstants.SELECT_ORDER,
            payload: order
        });
    }
}

export const BookOrders: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_BookOrders_Action
>> = (order: IOrder) => {
    return async (dispatch: ThunkDispatch<any, any, AnyAction>): Promise<void> => {
        await StockService.BookOrders(order).then(response => {
            console.log('book orders')
            order = {...order, orderStatus: OrderStatus.IN_PROGRESS};

            dispatch({
                type: StockOrderActionConstants.UPDATE_ORDER,
                payload: order
            });

            order = {...order, errorMessage: { code: response.status, text: response.statusText}};

            switch(response.status){
                case 200:
                    if(response.data?.message == "Rejected")
                        order = {...order, orderStatus: OrderStatus.REJECTED};
                        // order.orderStatus = OrderStatus.REJECTED;
                    else
                        order = {...order, orderStatus: OrderStatus.BOOKED};
                        // order.orderStatus = OrderStatus.BOOKED;
                    break;
                default:
                    order = {...order, orderStatus: OrderStatus.ERROR};
                    // order.orderStatus = OrderStatus.ERROR;
                    break;
            }
    
            dispatch({
                type: StockOrderActionConstants.UPDATE_ORDER,
                payload: order
            });
        }).catch(err => {
            console.log('error!');
            order = {...order, errorMessage: { code: err.status, text: err.statusText}, orderStatus : OrderStatus.ERROR};
            dispatch({
                type: StockOrderActionConstants.UPDATE_ORDER,
                payload: order
            });
        });

        console.log('booked order action')
    }
}

export const RemoveOrders: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_RemoveOrders_Action
>> = (orders: IOrder[]) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: StockOrderActionConstants.REMOVE_ORDERS,
            payload: orders
        });
    }
}


export const UpdateOrder: ActionCreator<ThunkAction<Promise<any>, IStockOrderState, {}, IStockOrder_UpdateOrder_Action
>> = (order: IOrder) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: StockOrderActionConstants.UPDATE_ORDER,
            payload: order
        });
    }
}