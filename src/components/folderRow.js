import React from 'react';
import Row from './row';

function FolderRow(props) {

    function handleFolderContextClick(e){
    alert("unimplemented method : folder context click");
  }

  return (
    <Row
      name={props.name}
      type={props.type}
      onRowClick={props.onRowClick}
      onContextClick={handleFolderContextClick}
      onDelete={props.onDelete} />
  );
}
export default FolderRow;