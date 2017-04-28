import React from 'react';
import Button from 'react-bootstrap/lib/Button';

function Row(props) {
  return (
    <tr key={props.key} >
      <td onClick={props.onRowClick} onContextMenu={props.onContextClick}>{props.name}</td>
      <td>{props.type}</td>
      <td><Button onClick={props.onDelete(props.name)}>Delete</Button></td>
    </tr>
  );
}

export default Row;