import React from 'react';
import { shallow, mount } from 'enzyme';

import { findByTestIdentifier } from '../../../utils/test_utils';
import StocksList from '../../../src/components/stocks/stocks-list';

import { Provider } from 'react-redux';
import { IStockOrderState } from '../../../src/store/store.interfaces';

import configureStore from 'redux-mock-store';
import { IAppState } from '../../../src/reducers/reducers';




describe('<StocksList /> is rendered', () => {
    let component: any;
    let store: any; 
    const mockStore = configureStore();

    beforeEach(() => {
        
        let stocksOrdersState : IStockOrderState = { stocks : [], orders : [], stocksPageUI: {}, ordersPageUI: {} }

        stocksOrdersState.stocks.push({  "stockId": "GUID-1",
                        "currency": "HKD",
                        "ric": "0434.HK",
                        "bloombergTicker": "434 HK",
                        "bloombergTickerLocal": "434 HK",
                        "name": "Boyaa Interactive International Ltd",
                        "country": "Hong Kong",
                        "price": 500.24 });
        
        const initialState : IAppState = { stocksOrdersState }

        store = mockStore(initialState);

        component = mount(
            <Provider store={store}>
                <StocksList />
            </Provider>
        )
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'stocks-list');
        expect(wrapper.length).toEqual(1);
    })

    describe('should render a row for a stock of id 1', () => {
        it('it should show a code of 01 CD', () => {
            const wrapper = findByTestIdentifier(component, 'stocks-list-GUID-1-code');
            expect(wrapper.text()).toEqual('434 HK');
        })
        it('it should show a price of 100', () => {
            const wrapper = findByTestIdentifier(component, 'stocks-list-GUID-1-price');
            expect(wrapper.text()).toEqual('500.24');
        })
        it('it should show a currency of USD', () => {
            const wrapper = findByTestIdentifier(component, 'stocks-list-GUID-1-currency');
            expect(wrapper.text()).toEqual('HKD');
        })
    })
    
})