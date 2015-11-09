import React from 'react';
import { getRecentAsteroids } from '../actions/AsteroidActions.js';

const defaultSearch = 'funny';

export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this._onKeyChange = this._onKeyChange.bind(this);
    this.state = {
      text: defaultSearch,
    };

    // get defaultSearch
    //getRecentAsteroids(defaultSearch);
  }

  _onKeyChange(event) {
    const search = event.target.value.trim();
    this.setState({
      text: search,
    });
    getRecentAsteroids(search);
  }

  render() {
    return (
      <div className="form-group">
        <input
          className="search"
          onChange={this._onKeyChange}
          placeholder="Search"
          type="text"
          value={this.state.text}
        />
      </div>
    );
  }
}

Search.propTypes = {
};

