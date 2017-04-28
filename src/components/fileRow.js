import React from 'react';
import Row from './row';

function FileRow(props) {
  
  function handleFileClick(e){
              props.onRowClick(e);


  }

  function handleFileContextClick(e){
          alert("unimplemented method : handleFileContextClick");
  }

  return (
    <Row
      name={props.name}
      type={props.type}
      onRowClick={handleFileClick} 
      onContextClick={handleFileContextClick}/>
  );
}
export default FileRow;
