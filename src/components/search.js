import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import PathView from './pathView';

function SearchBar(props) {

  function onSearch(e) {
    var paths;
    props
      .searchableData
      .keys
      .forEach(function (item) {
        if (e.target.children[0].children[0].value == item.key) {
          paths.push(item[e.target.children[0].children[0].value]);
        }
      });

    // props.onFind(props.items[e.target.children[0].children[0].value]);
    // alert(props.items[e.target.children[0].children[0].value]);   if
    // (e.target.children[0].children[0].value in props.items) {
    // props.onFind(props.items[e.target.children[0].children[0].value]);
    // alert(props.items[e.target.children[0].children[0].value]);   } else {
     alert(paths.toString());   
  }

  return (

    <Form inline onSubmit={onSearch}>
      <FormGroup controlId="formInlineName">
        <input className="form-control" type="text" placeholder="Search..."/>
      </FormGroup>
      <Button type="submit">
        Search
      </Button>
    </Form>
  );
}
export default SearchBar;