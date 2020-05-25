import * as React from 'react';
import { IOrder, IOption, OrderStatus, OrderSide, ExecutionMode } from '../../services/domain.interfaces';
import { Dropdown } from '../common/dropdown';
import { InputText } from '../common/input';

interface IProps {
    order: IOrder;
    selectHandler: () => void,
    rowChangedHandler: (order: IOrder) => void
}

export const OrderRow: React.FC<IProps> = ({ order, selectHandler, rowChangedHandler } : IProps) => {

    const [orderState, setOrderState]= React.useState<IOrder>(order);
    const [priceDisabled, setPriceDisabled] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log('oosepek');
        const isValid = isOrderValid();
        const newStatus = isValid ? OrderStatus.READY : OrderStatus.NOT_READY;
        // if(newStatus !== orderState.orderStatus){
            setOrderState({...orderState, orderStatus: newStatus });
            
        // }

    }, [orderState.executionMode, orderState.orderPrice, orderState.total]);


    React.useEffect(() => {
        if(orderState != order){
            rowChangedHandler(orderState);
        }
    }, [orderState]);

    React.useEffect(() => {
        console.log('second use effect')
        setOrderState(order);
        isPriceDisabled();
    }, [order]);

    const options : IOption[] = [{ id: 1, text: 'Market', value: 'MARKET'}, { id: 2, text: 'Limit', value: 'LIMIT'}]
    let orderStatus, orderSide;

    const rowStyle = {
        outline: order.orderStatus == OrderStatus.ERROR ?  "thin solid red" : "none"
    } 

    const isOrderValid = () : boolean => {

        console.log('isordervalid')
        const isValid = orderState.orderSide != null 
            && orderState.stockCode != null 
            && (orderState.executionMode != null || (orderState.executionMode == ExecutionMode.LIMIT && orderState.orderPrice > 0))
            && orderState.currency != null
            && orderState.total > 0 

        return isValid;
        
    }

    const inputChanged =(e: React.ChangeEvent<{value:any}>)=> {

        let val = null;
        // && e.target.value.toString().match('[0-9]+\.?[0-9]+')
        if (!isNaN(e.target.value)) // check if float
            val = parseFloat(e.target.value)
        else
            val = e.target.value

        const { name } = e.target as HTMLInputElement;
        setOrderState({...orderState, [name]: val})

    }

    const executionModeChanged =(e: React.ChangeEvent<{value:unknown}>)=> {

        console.log('exec')
        let val = e.target.value === ExecutionMode[ExecutionMode.MARKET] ? ExecutionMode.MARKET : ExecutionMode.LIMIT
        let updatedOrderPrice = val === ExecutionMode.MARKET ? 0 : orderState.orderPrice;

        const { name } = e.target as HTMLSelectElement;
        setOrderState({...orderState, [name]: val, orderPrice : updatedOrderPrice});

    }

    const isPriceDisabled = () => {
        const isDisabled = orderState.executionMode === ExecutionMode.MARKET 
                            || orderState.orderStatus === OrderStatus.ERROR 
                            || orderState.orderStatus === OrderStatus.IN_PROGRESS;

        setPriceDisabled(isDisabled);
    } 

    return (
        <tr style={rowStyle}>
            <td>
                <input
                    name="isSelected"  type="checkbox"
                    checked={orderState.isSelected}
                    onChange={selectHandler}
                    disabled={orderState.orderStatus === OrderStatus.IN_PROGRESS}/>
            </td>
            <td>{OrderStatus[orderState.orderStatus]}</td>
            <td>{OrderSide[orderState.orderSide]}</td>
            <td>{orderState.stockCode}</td>
            <td><Dropdown options={options} selectedValue={orderState.executionMode} onChangedHandler={executionModeChanged} propName={"executionMode"}/></td>
            <td><InputText keyid={orderState.id + 'orderPrice'} value={orderState.orderPrice} placeholder="Order price" onBlurHandler={inputChanged} propName={"orderPrice"} disabled={priceDisabled}/></td>
            <td><InputText keyid={orderState.id + 'total'} value={orderState.total} placeholder="Total" onBlurHandler={inputChanged} propName={"total"} disabled={false}/></td>
        </tr>
    )
}   