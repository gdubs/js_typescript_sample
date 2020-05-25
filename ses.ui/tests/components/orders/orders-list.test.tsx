import * as React from 'react';
import { shallow, mount } from 'enzyme';
import OrdersList from '../../../src/components/orders/orders-list';

import configureStore from 'redux-mock-store';
import { IAppState } from '../../../src/reducers/reducers';
import { IStockOrderState } from '../../../src/store/store.interfaces';
import { Provider } from 'react-redux';
import { findByTestIdentifier } from '../../../utils/test_utils';


describe('<OrdersList /> is rendered', () => {

    let component: any;
    let store: any; 
    const mockStore = configureStore();

    beforeEach(() => {

        let stocksOrdersState : IStockOrderState = { stocks : [], orders : [], stocksPageUI: {}, ordersPageUI: {} }
        const initialState : IAppState = { stocksOrdersState }

        store = mockStore(initialState);

        component = mount(
            <Provider store={store}>
                <OrdersList />
            </Provider>
        )
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'orders-list');
        expect(wrapper.length).toEqual(1);
    })

});