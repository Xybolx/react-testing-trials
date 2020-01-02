import React from 'react';
import { shallow } from 'enzyme';
import Toggler from '../components/Toggler';

describe('<Toggler/>', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<Toggler />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Toggle', () => {
    it('it calls setToggle state to the opposite of current state (true/false)', () => {
      wrapper.find('#toggle').props().onClick();
      expect(setState).toHaveBeenCalledWith(true || false);
    });
  });

});