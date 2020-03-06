import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Header></Header>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
