import * as React from 'react';
import { shallow, mount } from 'enzyme';
import {Dropdown} from '../../../src/components/common/dropdown'
import { IOption } from '../../../src/services/domain.interfaces';
import { findByTestIdentifier } from '../../../utils/test_utils';

describe('<Dropdown /> is rendered', () => {

    let component: any;

    beforeEach(() => {

        const options : IOption[] = [{ id: 15558788555, text: 'Option 1', value: "1"}]

        component = mount(<Dropdown key={123456789} options={options} propName="prop_name" onChangedHandler={() => jest.fn()}/>)
    })

    it('should render the component', () => {
        const wrapper = findByTestIdentifier(component, 'common-dropdown');
        expect(wrapper.length).toEqual(1);
    })

});