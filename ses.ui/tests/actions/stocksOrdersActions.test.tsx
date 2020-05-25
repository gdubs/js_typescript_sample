import { StockOrderActionConstants, IStockOrderState } from '../../src/store/store.interfaces';
import { GetStocks, GetStockBy, NewOrder, SelectOrder } from '../../src/actions/stocksOrdersActions';
import { OrderSide, OrderStatus, ExecutionMode, IStock, IOrder } from '../../src/services/domain.interfaces';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


describe('StockOrderActions', () => {

    const mockStore = configureStore([thunk]);
    let store : any;

    beforeEach(()=> {
        store = mockStore({});
    })

    // it('should create an action to get a stock by code', () => {
    //     const stock_code = 'STOCK_CODE_1';
    //     const expectedAction = {
    //         type: StockOrderActionConstants.GET_STOCK,
    //         payload: stock_code
    //     };

    //     expect(GetStockBy(stock_code)).toEqual(expectedAction);
    // })
    it('should create an action to get all stocks', () => {
        const expectedAction = {
            type: StockOrderActionConstants.GET_STOCKS,
            payload: [] // stocks
        }

        store.dispatch(GetStocks()).then(()=>{
            const actualActions = store.getActions().map((action:any) => action.type);
            expect(actualActions).toEqual(expectedAction);
        })
    })

    it('should create an action to add a buy order', () => {
        
        const order : IOrder = { id: 0, stockCode: 'STOCK_CODE_1', orderSide: OrderSide.BUY, orderStatus: OrderStatus.NOT_READY, executionMode: ExecutionMode.MARKET, orderPrice: 0.00, total:0 }
        const expectedAction = {
            type: StockOrderActionConstants.NEW_ORDER,
            payload: order
        }

        store.dispatch(NewOrder(order)).then(()=>{
            const actualActions = store.getActions().map((action:any) => action.type);
            expect(actualActions[0]).toEqual(expectedAction.type);
        });
    })

    it('should create an action to add a sell order', () => {
        const order: IOrder = { id: -1, stockCode: 'STOCK_CODE_2', orderSide: OrderSide.SELL, orderStatus: OrderStatus.NOT_READY, executionMode: ExecutionMode.MARKET, orderPrice: 0.00, total: 0}
        const expectedAction = {
            type: StockOrderActionConstants.NEW_ORDER,
            payload: order
        }

        store.dispatch(NewOrder(order)).then(()=>{
            const actualActions = store.getActions().map((action:any) => action.type);
            console.log('dispatching neworder')
            console.log(actualActions)
            expect(actualActions[0]).toEqual(expectedAction.type);
        });
    })

    it('should create an action that makes an order selected', () => {
        const order = { stockCode: 'STOCK_CODE_2', orderSide: OrderSide.SELL, orderStatus: OrderStatus.NOT_READY, executionMode: ExecutionMode.MARKET, selected: true}
        const expectedAction = {
            type: StockOrderActionConstants.SELECT_ORDER,
            payload: order
        }

        store.dispatch(SelectOrder(order)).then(()=>{
            const actualActions = store.getActions().map((action:any) => action.type);
            expect(actualActions[0]).toEqual(expectedAction.type);
        });
    })
})
