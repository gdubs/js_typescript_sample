import React, { ReactElement } from 'react';
import { shallow } from 'enzyme';
import Container from '../../../src/components/body/container';
import { findByTestIdentifier } from '../../../utils/test_utils';



describe('<Container /> renders', () => {
    let component: any;
    let navWrapper: any;

    beforeEach(() => {
        component = shallow(<Container />);
    })

    it('renders container div', () => {
        const wrapper = findByTestIdentifier(component, 'container');
        expect(wrapper.length).toEqual(1);
    })
})