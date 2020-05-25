import * as React from 'react'
import { Switch, Route } from 'react-router-dom';
import Stocks from '../stocks/stocks';
import Orders from '../orders/orders';


const Container = () => {
    return (
        <div test-id="container">
            <Switch>
                <Route exact path='/' component={Stocks}/>
                <Route exact path='/orders' component={Orders}/>
            </Switch>
        </div>
    )
}
  
export default Container;