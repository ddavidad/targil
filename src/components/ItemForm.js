import React from 'react';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';

function ItemForm(props) {

  function onItemSubmit(e) {
    var item = {
      "type": e.target.children[1].children[0].value,
      "name": e.target.children[0].children[0].value,
    };

    props.onItemSubmit(item);

    return item;
  }

  return (
    <Form inline onSubmit={onItemSubmit}>
      <FormGroup controlId="formInlineName">
        <FormControl type="text" placeholder="name"/>
      </FormGroup>
      <FormGroup controlId="formInlineEmail">
        <FormControl placeholder="file/folder"/>
      </FormGroup>
      <Button type="submit">
        submit
      </Button>
    </Form>
  );
}
export default ItemForm;