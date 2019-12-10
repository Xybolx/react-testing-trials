import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WordArray from './WordArray';

Enzyme.configure({ adapter: new Adapter() });

describe('<WordArray />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.shallow(<WordArray />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addToArray', () => {
    it("it calls setWords with ['dog']", () => {
      wrapper.find('#addToArray').props().onClick();
      expect(setState).toHaveBeenCalledWith(['dog']);
    });
  });

  describe('clearArray', () => {
    it('it calls setWords with an empty array', () => {
      wrapper.find('#clearArray').props().onClick();
      expect(setState).toHaveBeenCalledWith([]);
    });
  });
});