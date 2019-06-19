import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper
  it('renders without crashing', () => {
    wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

})
