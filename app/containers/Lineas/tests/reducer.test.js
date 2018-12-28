
import { fromJS } from 'immutable';
import lineasReducer from '../reducer';

describe('lineasReducer', () => {
  it('returns the initial state', () => {
    expect(lineasReducer(undefined, {})).toEqual(fromJS({}));
  });
});
