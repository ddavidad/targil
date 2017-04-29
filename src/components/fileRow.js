import React from 'react';
import Row from './row';

function FileRow(props) {

  function handleFileContextClick(e) {
    alert("unimplemented method : handleFileContextClick");
  }

  return (<Row
    name={props.name}
    type={props.type}
    onRowClick={props.onRowClick}
    onContextClick={handleFileContextClick}
    onDelete={props.onDelete}/>);
}
export default FileRow;
