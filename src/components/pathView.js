import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import './pathView.css';

function PathView(props) {

  function
  handlePathClick(e) {
    props.goUp(props.path.split("/").length - 2 - props.path.split("/").indexOf(e.target.innerText));
  }
  function
  handleUpClick(e) {
    props.goUp(1);
  }

  return (
    <ul>
      <li>
        <Button onClick={handleUpClick}>UP</Button>
      </li>
      {props
        .path
        .trim()
        .split("/")
        .filter((step) => step !== "")
        .map((step, i) => <li>
          <Button key={i} onClick={handlePathClick}>{step}</Button>
        </li>)}
    </ul>
  );
}
export default PathView;