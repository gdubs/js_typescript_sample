import * as React from 'react';
import Nav from './body/nav';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from './body/container';



import { connect, ConnectedProps } from 'react-redux';
import { IStockOrderState, StockOrderActionConstants } from '../store/store.interfaces';
import { GetStocks, GetStocksHardCode } from '../actions/stocksOrdersActions';

import { ThunkDispatch } from 'redux-thunk';
import { compose, AnyAction } from 'redux';
import { IAppState } from '../reducers/reducers';


const App = (props: Props)  => {

    React.useEffect(() => {
        props.getStocks(1, 15);
        console.log('stocks get from service ');
    }, []);

    return (
         <Router>
            <div>
                <Nav />
                <Container />
            </div>
         </Router>
    )
}
    
const mapStateToProps = (state: IAppState) => {
    return {
      stocks: state.stocksOrdersState.stocks,
      orders: state.stocksOrdersState.orders
    };
  };
  
  const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
    return {
      getStocks: (pageNumber: number, pageSize: number) => dispatch(GetStocks(pageNumber, pageSize)),
      getStocksHardCode: () => dispatch(GetStocksHardCode())
    };
  };

  const connector = connect(mapStateToProps, mapDispatchToProps)

  type PropsFromRedux = ConnectedProps<typeof connector>
  type Props = PropsFromRedux;
export default connector(App);