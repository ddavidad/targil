import React from 'react';
import Button from 'react-bootstrap/lib/Button';

function Row(props) {

  function handleDelete(deleteBtn) {
    props.onDelete(deleteBtn.target.parentElement.parentElement.children[0].innerText);
  }

  return (
    <tr key={props.key}>
      <td onClick={props.onRowClick} onContextMenu={props.onContextClick}>{props.name}</td>
      <td>{props.type}</td>
      <td>
        <Button onClick={handleDelete}>Delete</Button>
      </td>
    </tr>
  );
}

export default Row;