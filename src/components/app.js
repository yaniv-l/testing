import React, { Component } from 'react';
import CommnetBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <CommnetBox />
        <CommentList />
      </div>
    );
  }
}
