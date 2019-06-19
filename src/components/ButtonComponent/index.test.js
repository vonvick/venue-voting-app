import React from 'react';
import { mount } from 'enzyme';
import ButtonComponent from './';

describe('ButtonComponent', () => {
  const baseProps = {
    text: 'Welcome to React',
    backgroundColor: 'red',
    onClickHandler: jest.fn(), 
    buttonColor: 'white',
    className: 'testButton',
  };
  let wrapper;

  beforeAll(() => {
    wrapper = mount(<ButtonComponent {...baseProps} />);
  });

  it('renders with appropriate text', () => {
    expect(wrapper.text()).toMatch(baseProps.text);
  });

  it('trigger the click event', () => {
    wrapper.find('button').simulate('click');
    expect(baseProps.onClickHandler).toHaveBeenCalled();
  });
});
