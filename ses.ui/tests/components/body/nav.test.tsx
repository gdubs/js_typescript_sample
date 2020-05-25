import React, { ReactElement } from 'react';
import { withRouter } from 'react-router';
import { shallow, mount } from 'enzyme';
import Nav from '../../../src/components/body/nav';
import { findByTestIdentifier } from '../../../utils/test_utils';
import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { IStockOrderState } from '../../../src/store/store.interfaces';
import { IAppState } from '../../../src/reducers/reducers';

import { BrowserRouter as Router} from 'react-router-dom'

describe('<Nav /> renders', () => {
    jest.mock('react-router-dom');

    let component: any;
    let navWrapper: any;
    const mockStore = configureStore([thunk]);

    beforeEach(() => {
        const stocksOrdersState : IStockOrderState = { stocks : [], orders : [], stocksPageUI: {}, ordersPageUI: {} }
        const initialState : IAppState = { stocksOrdersState }
        const store = mockStore(initialState);
        component = mount(<Provider store={store}><Router><Nav /></Router></Provider>);
    })

    it('it renders a nav node', () => {
        navWrapper = component.find(Nav);
        expect(navWrapper.length).toEqual(1);
    })

    describe('Nav node renders brand', () => {
        it('renders navbar brand', () => {
            let navbar_brand = findByTestIdentifier(component, 'nav-brand'); 
            expect(navbar_brand.length).toEqual(1);
        })
    })

    describe('Nav node renders link child nodes', () => {
        it('renders links', () => {
            let links = findByTestIdentifier(component, 'links'); 
            expect(links.length).toEqual(1);
        })
    })

    // describe('Navigates ')
})