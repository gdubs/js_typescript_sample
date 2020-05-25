import React from 'react';
import { shallow } from 'enzyme';

import Stocks from '../../../src/components/stocks/stocks';
import { findByTestIdentifier } from '../../../utils/test_utils';
import StocksList from '../../../src/components/stocks/stocks-list';

describe('<Stocks /> renders', () => {

    let component : any;

    beforeEach(() => {
        component = shallow(<Stocks />);
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'stocks');
        expect(wrapper.length).toEqual(1);
    })

    it('should render stocks list', () => {
        expect(component.find(StocksList).length).toEqual(1);
    })
})