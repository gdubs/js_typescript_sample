import { IStock, IOrder, IPageUI } from "../services/domain.interfaces";

export enum StockOrderActionConstants {
    GET_STOCK = 'GET_STOCK',
    GET_STOCKS = 'GET_STOCKS',
    GET_STOCKS_API = 'GET_STOCKS_API',
    NEW_ORDER = 'NEW_ORDER',
    GET_ORDERS = 'GET_ORDERS',
    BUY_ORDER = 'BUY_ORDER',
    SELL_ORDER = 'SELL_ORDER',
    REMOVE_ORDER = 'REMOVE_ORDER',
    BOOK_ORDER = 'BOOK_ORDER',
    SELECT_ORDER = 'SELECT_ORDER',
    BOOK_ORDERS = 'BOOK_ORDERS',
    REMOVE_ORDERS = 'REMOVE_ORDERS',
    UPDATE_ORDER = 'UPDATE_ORDER'
}

export interface IStockOrderState {
    readonly stocks : IStock[],
    readonly orders : IOrder[],
    readonly stocksPageUI: IPageUI,
    readonly ordersPageUI: IPageUI
}

