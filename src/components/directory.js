import React from 'react';
import Table from 'react-bootstrap/lib/Table';
import sortJsonArray from 'sort-json-array';
import FolderRow from './folderRow';
import FileRow from './fileRow';

function Directory(props) {

  function handleFolderClick(e) {
    props.onPathIncrement(e.target.innerText);
  }

  function handleFileClick(increment) {
    alert("unimplemented method : handleFileClick");
  }

  function handleItemDelete(e){
    props.onItemDelete(e)
  }

  function createItemList(){
    var items = [];

    items = sortJsonArray(sortJsonArray(props.item.children, 'name', 'asc'), 'type', 'des').map((item, i) => item.type === "folder" ? 
    (<FolderRow name={item.name}
    type={item.type}
    children={item.children}
    key={i}
    onRowClick={handleFolderClick}
    onDelete={handleItemDelete} />)
    
    :
    
    (<FileRow name={item.name}
    type={item.type}
    children={item.children}
    key={i}
    onRowClick={handleFileClick}
    onDelete={handleItemDelete} 
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