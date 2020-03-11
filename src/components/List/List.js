import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { articles: state.getIn(['form', 'articles']) };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(item => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
