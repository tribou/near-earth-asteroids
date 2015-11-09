import React from 'react';
import Search from './Search.jsx';

export default class Nav extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="navbar-header col-sm-8 col-sm-offset-2">
              <a className="navbar-brand" href="#">
                Near-Earth Asteroids
              </a>
              <form className="navbar-form pull-right" role="search">
                <Search />
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
};

