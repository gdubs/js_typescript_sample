import * as React from 'react';
import { shallow, mount } from 'enzyme';
import {InputText} from '../../../src/components/common/input'
import { findByTestIdentifier } from '../../../utils/test_utils';

describe('<Input /> is rendered', () => {

    let component: any;

    beforeEach(() => {
        component = mount(<InputText value={'Test value'} placeholder={'Test placeholder'} onBlurHandler={() => jest.fn()} onChangedHandler={() => jest.fn()} disabled={false} propName="prop_name"/>)
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'common-input');
        expect(wrapper.length).toEqual(1);
    })

});