import React from 'react';
import AsteroidStore from '../stores/AsteroidStore.js';
import { getRecentAsteroids } from '../actions/AsteroidActions.js';
import Nav from './Nav.jsx';
import Table from './Table.jsx';

// Entrypoint for the React app
export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      currentUser: AsteroidStore.getCurrentUser(),
    };
  }

  componentDidMount() {
    AsteroidStore.addChangeListener(this._onChange);
    getRecentAsteroids();
  }

  componentWillUnmount() {
    AsteroidStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      currentUser: AsteroidStore.getCurrentUser(),
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Table />
      </div>
    );
  }
}

Index.propTypes = {
};

