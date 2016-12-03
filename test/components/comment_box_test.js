// lint ignore - mocah directives
/* global it, describe, expect, beforeEach */
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

// Group together similar tests
describe('CommnetBox', () => {
  // Defines component as outside of the beforeEach so we can use it inside
  // each of the 'it'
  let component;
  beforeEach(() => {
    // Instansiate the component
    component = renderComponent(CommentBox);
  });

  it('Has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });

  // Test a spesific assertion
  it('Has a text area', () => {
    // Check an assertion on the component
    expect(component.find('textarea')).to.exist;
  });

  it('Has a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Check text etering and cleaninng', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('Shows text that entered', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('Clears the text after submmiting', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
