import * as React from 'react'
import { Link } from 'react-router-dom';
import { IAppState } from '../../reducers/reducers';
// import { ThunkDispatch } from 'redux-thunk';
// import { AnyAction } from 'redux';
import { withRouter } from 'react-router';
import { ConnectedProps, connect } from 'react-redux';

const Nav : React.FC<Props> = ({ orders }) => {
    return (
        <nav id="navbar" className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end" test-id='nav'>
            <a className="navbar-brand" test-id="nav-brand">
                Stock Execution System
            </a>
            <div className="ml-auto mr-1" test-id='links'>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Stocks </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/orders" className="nav-link">Orders <span className="badge badge-info">{orders.length}</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


const mapStateToProps = (state: IAppState) => {
    return {
      orders: state.stocksOrdersState.orders
    };
  };
  
  const connector = connect(mapStateToProps)

  type PropsFromRedux = ConnectedProps<typeof connector>
  type Props = PropsFromRedux;

export default connector(Nav);