import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';

import Form from '../../components/Form/Form';
import List from '../../components/List/List';

class Home extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Header></Header>
        <h1>Home Page</h1>
        <List />
        <h2>Add a new article here</h2>
        <Form />
      </div>
    );
  }
}

export default Home;
