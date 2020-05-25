import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/components/app';
import Nav from '../src/components/body/nav';
import Container from '../src/components/body/container';
import { Provider } from 'react-redux';

import { IStockOrderState } from '../src/store/store.interfaces';

import configureStore from 'redux-mock-store';
import { IAppState } from '../src/reducers/reducers';

import thunk from 'redux-thunk';

describe('<App /> renders', () => {
    let appComponent : any; 
    let wrapper: any;
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        const stocksOrdersState : IStockOrderState = { stocks : [], orders : [], stocksPageUI: {}, ordersPageUI: {} }
        const initialState : IAppState = { stocksOrdersState }
        const store = mockStore(initialState);
        appComponent= mount(<Provider store={store}><App /></Provider>);
    })
    
    it('should render component', () => {
        expect(appComponent.length).toEqual(1);
        wrapper = appComponent.find(App);
        expect(wrapper.length).toEqual(1);
    })
}) 