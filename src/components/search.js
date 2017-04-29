import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

function SearchBar(props) {

  function onSearch(e) {
    var paths = [];

    for (var key in props.searchableData) {
      if (e.target.children[0].children[0].value === props.searchableData[key]) {
        paths.push(key);
      }
    }
    if (paths.length !== 0) {
      var result = "results: \n";

      paths.forEach((path) => {
        result += path + '\n';
      })
      alert(result);
    }else{
      alert("no such file :(");
    }
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