import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class ConnectedPost extends React.Component {
  componentDidMount() {
    this.props.getDataAsyncThunk('loading data after OK is clicked');
  }

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
  return { articles: state.getIn(['post', 'remoteArticles']).slice(0, 20) };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataAsyncThunk(data) {
      dispatch(actionCreators.getDataAsyncThunk(data));
    }
  };
};

const Post = connect(mapStateToProps, mapDispatchToProps)(ConnectedPost);
export default Post;
