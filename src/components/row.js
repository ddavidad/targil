import React from 'react';

function Row(props) {
  return (
    <tr key={props.key} onClick={props.onRowClick} onContextMenu={props.onContextClick}>
      <td>{props.name}</td>
      <td>{props.type}</td>
    </tr>
  );
}

export default Row;