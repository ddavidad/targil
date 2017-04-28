import React, {Component} from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    this.handleDoubleClick = this
      .handleDoubleClick
      .bind(this);
  }

  handleDoubleClick(e) {
    if (this.props.type === "folder") {
      this
        .props
        .onRowClick(this.props.name);
    }
  }

  render() {
    return (
      <tr key={this.props.key} onClick={this.handleDoubleClick}>
        <td>{this.props.name}</td>
        <td>{this.props.type}</td>
      </tr>
    );
  }
}

export default Row;