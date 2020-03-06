import React from 'react';
import './Login.scss';
import Header from '../../components/Header/Header';

class Login extends React.Component {
  render() {
    return (
      <div className="LoginPage">
        <Header></Header>
        <h1>Login Page</h1>
        <button onClick={this.goToHome.bind(this)}>Go To Home Page</button>
        {/* <button onClick={()=>{this.goToHome()}}>Go To Home Page</button> */}
      </div>
    );
  }

  goToHome() {
    this.props.history.push('/home');
  }
}

export default Login;
