// lint ignore - mocah directives
/* global it, describe, expect, beforeEach */
import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['New comment 1', 'Another comment'] };
    component = renderComponent(CommentList, null, props);
  });

  it('Shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('Shows each comment that is provided', () => {
    expect(component).to.contain('New comment 1');
    expect(component).to.contain('Another comment');
  });
});
