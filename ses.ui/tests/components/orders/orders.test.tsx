import React from 'react';
import { shallow } from 'enzyme';

import Orders from '../../../src/components/orders/orders';
import OrdersList from '../../../src/components/orders/orders-list';
import { findByTestIdentifier } from '../../../utils/test_utils';

describe('<Orders /> renders', () => {
    let component: any;

    beforeEach(() => {
        component = shallow(<Orders />);
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'orders-basket');
        expect(wrapper.length).toEqual(1);
    })

    describe ('<OrdersList /> renders', () => {
        it('should render the component', () => {
            expect(component.find(OrdersList).length).toEqual(1); 
        })
    })
})