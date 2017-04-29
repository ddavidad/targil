import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import sortJsonArray from 'sort-json-array';
import FolderRow from './folderRow';
import FileRow from './fileRow';

function Directory(props) {

  function handleFileClick(increment) {
    alert("TODO: random easter EGG");
  }

  function createItemList(){
    var items = [];

    items = sortJsonArray(sortJsonArray(props.item.children, 'name', 'asc'), 'type', 'des').map((item, i) => item.type === "folder" ? 
    (<FolderRow 
      name={item.name}
      type={item.type}
      children={item.children}
      key={i}
      onRowClick={props.onPathIncrement}
      onDelete={props.onItemDelete} />)
    
    :
    
    (<FileRow 
      name={item.name}
      type={item.type}
      children={item.children}
      key={i}
      onRowClick={handleFileClick}
      onDelete={props.onItemDelete} 
    />));

    return items;
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {createItemList()}
        </tbody>
      </Table>
    </div>
  );
}

export default Directory;