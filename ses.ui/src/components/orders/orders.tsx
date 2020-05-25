import * as React from 'react'
import { IAppState } from '../../reducers/reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import OrdersList from './orders-list';


const Orders : React.FC = () => {
  return (
        <div test-id='orders-basket'>
            <OrdersList />
        </div>
    )
}

export default Orders;