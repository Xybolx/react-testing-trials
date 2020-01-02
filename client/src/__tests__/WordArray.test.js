import React from 'react';
import { shallow } from 'enzyme';
import WordArray from '../components/WordArray';

describe('<WordArray />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<WordArray />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('addToArray', () => {
    it("it calls setWords with ['dog' || 'cat' || 'mouse]", () => {
      wrapper.find('#addToArray').props().onClick();
      expect(setState).toHaveBeenCalledWith(['dog' || 'cat' || 'mouse']);
    });
  });

  describe('clearArray', () => {
    it('it calls setWords with an empty array', () => {
      wrapper.find('#clearArray').props().onClick();
      expect(setState).toHaveBeenCalledWith([]);
    });
  });
});