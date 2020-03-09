import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class ConnectedPost extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <ul>
        {this.props.articles.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return { articles: state.getIn() };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataAsyncThunk() {
      dispatch(actionCreators.getDataAsyncThunk());
    }
  };
};

const Post = connect(mapStateToProps, mapDispatchToProps)(ConnectedPost);
export default Post;
