import * as React from 'react'
import { IAppState } from '../../reducers/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { Dropdown } from '../common/dropdown';
import { IOption, IOrder } from '../../services/domain.interfaces';
import { InputText } from '../common/input';
import { useState } from 'react';
import { ActionButton } from '../common/action-button';
import { OrderRow } from './order-row';
import { RemoveOrders, SelectOrder, BookOrders, UpdateOrder } from '../../actions/stocksOrdersActions';

const OrdersList : React.FC<Props> = ({ orders, selectOrder, removeOrders, bookOrders, updateOrder } : Props) => {

    const removeSelected = () => { 
        console.log('remove')
        const removeThese = orders.filter((o: IOrder) => o.isSelected);
        removeOrders(removeThese);
    }
    const bookSelected = () => { 
        console.log('book')
        const bookThese = orders.filter((o:IOrder) => o.isSelected);
        bookThese.forEach((e: IOrder) => {
            bookOrders(e);
        });
    }
    const rowChanged = (order: IOrder) => {
        updateOrder(order);
    }

    const removeBtnStyle = "btn btn-primary btn-sm"
    const bookBtnStyle = "btn btn-info btn-sm"

    const orders_list = orders.map((o:IOrder) => {
        return <OrderRow key={o.id} order={o} selectHandler={() => selectOrder(o)} rowChangedHandler={(order:IOrder) => rowChanged(order)}/>
    })

  return (
        <div className="container" test-id="orders-list">
            <h3>Orders</h3>
            <div>
                <ActionButton text="Remove" clickHandler={() => removeSelected()} btnStyle={removeBtnStyle}/>
                <ActionButton text="Book" clickHandler={() => bookSelected()} btnStyle={bookBtnStyle}/> 
            </div>
            <table className="table" test-id='stocks-list'>
                <thead className="thead-light">
                    <tr>
                        <th>&nbsp;</th>
                        <th>Status</th>
                        <th>Side</th>
                        <th>Stock code</th>
                        <th>Execution mode</th>
                        <th>Order price</th>
                        <th>Amount (shares)</th>
                    </tr>
                </thead>
                <tbody>
                    { orders != null && orders.length > 0
                        ? orders_list
                        : <tr><td colSpan={7}>No orders</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps = (state: IAppState) => {
    return {
      orders: state.stocksOrdersState.orders
    };
  };
  
  const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
       removeOrders: (orders: IOrder[]) => dispatch(RemoveOrders(orders)),
       selectOrder: (order: IOrder) => dispatch(SelectOrder(order)),
       bookOrders: (order: IOrder) => dispatch(BookOrders(order)),
       updateOrder: (order: IOrder) => dispatch(UpdateOrder(order))
    };
  };
  
  const connector = connect(mapStateToProps, mapDispatchToProps)

  type PropsFromRedux = ConnectedProps<typeof connector>
  type Props = PropsFromRedux;

export default connector(OrdersList);