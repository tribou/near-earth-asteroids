import React from 'react';

export default class TableRow extends React.Component {

  render() {
    return (

      <tr>
        <td>{ this.props.rank }</td>
        <td>{ this.props.team }</td>
        <td>{ this.props.entries }</td>
        <td>{ this.props.score }</td>
      </tr>

    );
  }
}

TableRow.propTypes = {
  entries: React.PropTypes.number,
  rank: React.PropTypes.number,
  score: React.PropTypes.number,
  team: React.PropTypes.string,
};

