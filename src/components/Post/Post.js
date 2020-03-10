import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class ConnectedPost extends React.Component {
  componentDidMount() {
    this.props.getDataAsyncSaga();
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

// mount state to this.props
const mapStateToProps = state => {
  return { articles: state.getIn(['post', 'remoteArticles']).slice(0, 20) };
};

// mount dispatch func to this.props
const mapDispatchToProps = dispatch => {
  return {
    getDataAsyncSaga() {
      dispatch(actionCreators.getDataAsyncSaga());
    }
  };
};

const Post = connect(mapStateToProps, mapDispatchToProps)(ConnectedPost);

// shorthand
// const Post = connect(mapStateToProps, {
//   getDataAsyncSaga: () => {
//     return actionCreators.getDataAsyncSaga();
//   }
// })(ConnectedPost);
export default Post;
