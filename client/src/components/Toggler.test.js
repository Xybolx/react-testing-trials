import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toggler from './Toggler';

Enzyme.configure({ adapter: new Adapter() });

describe('<Toggler/>', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<Toggler />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Toggle', () => {
    it('it calls setToggle state to the opposite of current state (true/false)', () => {
      wrapper.find('#toggle').props().onClick();
      expect(setState).toHaveBeenCalledTimes(1);
    });
  });

});