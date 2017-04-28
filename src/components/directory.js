import React, {Component} from 'react';
import Table from 'react-bootstrap/lib/Table';
import Row from './row'
import sortJsonArray from'sort-json-array';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.handleRowClick = this.handleRowClick.bind(this);
  }

handleRowClick(increment){
  this.props.onPathIncrement(increment)
}

  render() {

      this.listItems =   sortJsonArray(sortJsonArray(this.props.items, 'name','asc'), 'type','des')
      .map((item, i) => <Row name={item.name} type={item.type} children={item.children} key={i} onRowClick={this.handleRowClick}/>);

    return (
      <div>
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
              {sortJsonArray(sortJsonArray(this.listItems, 'name','asc'), 'type','des')}  
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Directory;