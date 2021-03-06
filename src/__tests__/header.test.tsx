import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/header';


it('Should render a header!' , ()=>{
    const component = shallow(<Header />);
    // eslint-disable-next-line testing-library/no-debugging-utils
    const wrapper = component.find('[data-test="header"]');
    expect(wrapper.length).toBe(1);
})