import * as React from 'react';
import { IStock, IOrder, OrderSide, OrderStatus, ExecutionMode } from '../../services/domain.interfaces';
import { IAppState } from '../../reducers/reducers';
import { connect, ConnectedProps } from 'react-redux';
import { ActionButton } from '../common/action-button';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { NewOrder, GetStocks } from '../../actions/stocksOrdersActions';
import { StockRow } from './stock-row';
import { stat } from 'fs';


const StocksList: React.FC<Props> = ({ stocks, orders, stocksPageUI, getStocks, newOrder }) => {

    const stocks_obj = stocks.map((s:IStock) => {
        return <StockRow key={s.stockId} stock={s} placeOrderHandler={(orderSide) => placeOrder(s, orderSide)}/>
    });

    const placeOrder = (stock: IStock, orderSide: OrderSide) => {
        newOrder({ id: -1, stockCode: stock.bloombergTicker, orderSide: orderSide, orderStatus: OrderStatus.NOT_READY, currency: stock.currency, orderPrice: 0.00, total: 0 })
    }

    console.log('stocks list ' + stocksPageUI);

    return (
        <div test-id='stocks-list'>
            <h3>Stocks list</h3>
            <table className="table" >
                <thead className="thead-light">
                    <tr>
                        <th>Stock code</th>
                        <th>Market price</th>
                        <th>Currency</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks_obj}
                </tbody>
            </table>
            <div>
                {
                    (stocksPageUI.pageNumber === 1)
                    ? null
                    : <button onClick={() => getStocks((stocksPageUI.pageNumber < 1 ? 1 : stocksPageUI.pageNumber - 1), stocksPageUI.pageSize)}>Previous page</button>
                }
                Page {stocksPageUI.pageNumber} of {stocksPageUI.totalPageNumber} <button onClick={() => getStocks(stocksPageUI.pageNumber + 1, stocksPageUI.pageSize)}>Next page</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state: IAppState) => {
    return {
      stocks: state.stocksOrdersState.stocks,
      orders: state.stocksOrdersState.orders,
      stocksPageUI: state.stocksOrdersState.stocksPageUI
    };
  };
  
  const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
      getStocks: (pageNumber: number, pageSize: number) => dispatch(GetStocks(pageNumber, pageSize)),
      newOrder: (newOrder: IOrder) => dispatch(NewOrder(newOrder)),
    };
  };
  
  const connector = connect(mapStateToProps, mapDispatchToProps)

  type PropsFromRedux = ConnectedProps<typeof connector>
  type Props = PropsFromRedux;

export default connector(StocksList);