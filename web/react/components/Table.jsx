import React from 'react';
import AsteroidStore from '../stores/AsteroidStore.js';
import { getRecentAsteroids } from '../actions/AsteroidActions.js';
import TableRow from './TableRow.jsx';
//import { Table, Column } from 'fixed-data-table';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._getRows = this._getRows.bind(this);
    this.state = {
      asteroids: AsteroidStore.getAsteroids(),
      loading: AsteroidStore.isLoading(),
    };
  }

  componentDidMount() {
    AsteroidStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AsteroidStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState({
      asteroids: AsteroidStore.getAsteroids(),
      loading: AsteroidStore.isLoading(),
    });
  }

  _getRows() {
    return this.state.asteroids;
  }

  render() {
    // get array of asteroids
    let rows = [];

    // Create columns
    let columns = [
      'Asteroid ID',
      'Estimated Diameter',
      'Dangerous',
      'Miss Distance',
      'Date',
    ].map((col, index) => {
      return (

        <td key={index}>{col}</td>

      );
    });

    if (this.state.asteroids.length > 0) {
      rows = this.state.asteroids.map((team, index) => {
        return (

          <TableRow
            key={index}
          />

        );
      });
    }
    return (

      <div className="container">
        <div className="table-title">
          <h2>
            Asteroids
          </h2>
        </div>
        <table id="table" className="table table-striped table-hover">
          <thead>
            <tr>
              {columns}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>

    );
  }
}

Table.propTypes = {
};

