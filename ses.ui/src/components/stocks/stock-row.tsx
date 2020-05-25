import * as React from 'react';
import { IStock, OrderSide } from '../../services/domain.interfaces';
import { ActionButton } from '../common/action-button';

interface IProps {
    stock: IStock
    placeOrderHandler: (orderSide: OrderSide) => void
}

export const StockRow : React.FC<IProps> = ({ stock, placeOrderHandler }) => {

    const buyBtnStyle : string = "btn btn-primary btn-sm";
    const sellBtnStyle : string = "btn btn-info btn-sm";

    return (
        <tr>
            <td test-id={'stocks-list-' + stock.stockId + '-code'}>{stock.bloombergTicker}</td>
            <td test-id={'stocks-list-' + stock.stockId + '-price'}>{stock.price}</td>
            <td test-id={'stocks-list-' + stock.stockId + '-currency'}>{stock.currency}</td>
            <td test-id={'stocks-list-' + stock.stockId + '-actions'}><ActionButton text={'Buy'} clickHandler={() => placeOrderHandler(OrderSide.BUY)}  btnStyle={buyBtnStyle}/> <ActionButton text={'Sell'} clickHandler={() => placeOrderHandler(OrderSide.SELL)} btnStyle={sellBtnStyle}/></td>
        </tr>
    );
}