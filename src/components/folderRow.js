import React from 'react';
import Row from './row';

function FolderRow(props) {
  
  function handleFolderClick(e){
    props.onRowClick(e);
  }

    function handleFolderContextClick(e){
    alert("unimplemented method : folder context click");

  }

  return (
    <Row
      name={props.name}
      type={props.type}
      onRowClick={handleFolderClick}
      onContextClick={handleFolderContextClick} />
  );
}
export default FolderRow;