import { StockOrderActionConstants } from "./store.interfaces";
import { IStock, IOrder, IPageUI } from "../services/domain.interfaces";


interface IStockOrder_GetStockByCode_Action {
    type: StockOrderActionConstants.GET_STOCK,
    payload: string
}

interface IStockOrder_GetStocks_Action {
    type: StockOrderActionConstants.GET_STOCKS,
    payload: { stocks: IStock[], stocksPageUI: IPageUI }
}

interface IStockOrder_NewOrder_Action {
    type: StockOrderActionConstants.NEW_ORDER,
    payload: IOrder
}

interface IStockOrder_GetOrders_Action {
    type: StockOrderActionConstants.GET_ORDERS
}

interface IStockOrder_SelectOrder_Action {
    type: StockOrderActionConstants.SELECT_ORDER,
    payload: IOrder
}

interface IStockOrder_BookOrders_Action {
    type: StockOrderActionConstants.BOOK_ORDERS,
    payload: IOrder[]
}

interface IStockOrder_RemoveOrders_Action {
    type: StockOrderActionConstants.REMOVE_ORDERS,
    payload: IOrder[]
}

interface IStockOrder_UpdateOrder_Action {
    type: StockOrderActionConstants.UPDATE_ORDER,
    payload: IOrder
}

export {
    IStockOrder_GetStocks_Action,
    IStockOrder_GetStockByCode_Action,
    IStockOrder_NewOrder_Action,
    IStockOrder_GetOrders_Action,
    IStockOrder_SelectOrder_Action,
    IStockOrder_BookOrders_Action,
    IStockOrder_RemoveOrders_Action,
    IStockOrder_UpdateOrder_Action
} 