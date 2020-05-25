import * as React from 'react'
import StocksList from './stocks-list'
import { IStock } from '../../services/domain.interfaces';

const Stocks = () => {
    return (
        <div test-id='stocks'>
            <div className="container">
                <StocksList/>
            </div>
        </div>
    )
}

export default Stocks;