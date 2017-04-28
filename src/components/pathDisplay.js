import React, {Component} from 'react';
import Button from 'react-bootstrap/lib/Button';
import './pathDisplay.css';

class PathDisplay extends Component {
  constructor(props) {
    super(props);
    this.handlePathClick = this
      .handlePathClick
      .bind(this);

    this.handleUpClick = this
      .handleUpClick
      .bind(this);
  }

  handlePathClick(e) {
    this
      .props
      .goUp(this.props.path.split("/").length -2 - this.props.path.split("/").indexOf(e.target.innerText));
  }

  handleUpClick(e) {
    this
      .props
      .goUp(1);
  }

  render() {

    var path = this
      .props
      .path
      .split("/")
      .filter((step) => step !== "")
      .map((step, i) => <li key={i} onClick={this.handlePathClick}>{step}</li>);

    return (

      <ul>
        <li>
          <Button onClick={this.handleUpClick}>UP</Button>
        </li>
        {path}
      </ul>
    );
  }
}

export default PathDisplay;