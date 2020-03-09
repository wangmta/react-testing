import React from 'react';
import './Login.scss';
import Header from '../../components/Header/Header';
import { actionCreators } from './store';
import { connect } from 'react-redux';

class Login extends React.Component {
  render() {
    return (
      <div className="LoginPage">
        <Header></Header>
        <h1>Login Page</h1>
        <p>MyData = {this.props.myData}</p>
        <button
          onClick={() => {
            this.props.dispatchGetDataAction('123456');
          }}
        >
          Change MyData in Login
        </button>
        <button onClick={this.goToHome.bind(this)}>Go To Home Page</button>
        {/* <button onClick={()=>{this.goToHome()}}>Go To Home Page</button> */}
      </div>
    );
  }

  goToHome() {
    this.props.history.push('/home');
  }
}

// map store data to component props
const mapStateToProps = state => ({
  // if not use immutable.js
  // myData: state.login.myData
  myData: state.getIn(['login', 'myData'])
});

// mount store dispath function to component props
const mapDispatchToProps = dispatch => ({
  dispatchGetDataAction(data) {
    const action = actionCreators.getData(data);
    dispatch(action);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
