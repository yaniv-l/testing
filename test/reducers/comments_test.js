import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comment reducers', () => {
  it('handle actions with known types', () => {
    // check to confirm that incase we invoke commentReducer with no know type
    // We get back an empty array - we check using the eql as opposed to equal // which will look for a complete identical object.
    const action = { type: '', payload: '' };
    expect(commentReducer([], action)).to.be.eql([]);
  });

  it('handle action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'test comment' };
    expect(commentReducer([], action)).to.be.eql(['test comment']);
  });
});
