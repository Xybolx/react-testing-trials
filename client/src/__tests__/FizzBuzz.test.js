import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import FizzBuzz from '../components/FizzBuzz';

describe('<FizzBuzz />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<FizzBuzz />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<FizzBuzz />);
    expect(setState).toHaveBeenCalledWith(true);
  });

});