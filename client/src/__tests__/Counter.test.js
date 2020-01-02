import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter';

describe('<Counter />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Count Up', () => {
    it('it calls setCount with count + 1', () => {
      wrapper.find('#count-up').props().onClick();
      expect(setState).toHaveBeenCalledWith(1);
    });
  });

  describe('Count Down', () => {
    it('it calls setCount with count - 1', () => {
      wrapper.find('#count-down').props().onClick();
      expect(setState).toHaveBeenCalledWith(-1);
    });
  });

  describe('Zero', () => {
    it('it calls setCount with 0', () => {
      wrapper.find('#zero-count').props().onClick();
      expect(setState).toHaveBeenCalledWith(0);
    });
  });
});