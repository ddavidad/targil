import React, {Component} from 'react';

class SearchBar extends Component {


  render() {

this.handleChange = function(e){

}

    return (
   <input  onSubmit={this.handleChange}/>
    );
  }
}

export default SearchBar;