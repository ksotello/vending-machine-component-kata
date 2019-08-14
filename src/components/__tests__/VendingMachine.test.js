import React from 'react';
import { mount } from 'enzyme';

import { VendingMachine } from "../VendingMachine";

describe('<VendingMachine />', () => {
  let wrapper;

  afterEach(() => {
    wrapper && wrapper.unmount();
    wrapper = null;
  });

  it('should mount', done => {
    wrapper = mount(<VendingMachine />);
    expect(wrapper.exists());
    done();
  });
});