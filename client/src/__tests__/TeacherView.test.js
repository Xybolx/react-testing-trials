import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import TeacherView from '../components/TeacherView';

describe('<TeacherView />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = shallow(<TeacherView />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('it calls setRender with true', () => {
    render(<TeacherView />);
    expect(setState).toHaveBeenCalledWith(true);
  });

});