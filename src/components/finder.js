import React, {Component} from 'react';
import Directory from './directory';
import PathView from './pathView';
import SearchBar from './search';
import {getItem, goDown, goUp} from './pathCommon';
import {flatten} from './pathCommon';


class Finder extends Component {

    constructor(props) {
        super(props);

        this.handlePathIncrement = this
            .handlePathIncrement
            .bind(this);

        this.handleNewPath = this
            .handleNewPath
            .bind(this);

        this.handleUpMove = this
            .handleUpMove
            .bind(this);

        this.state = {
            root: props.root,
            path: "/"
        };
    }

    handlePathIncrement(itemName) {
        this.handleNewPath(goDown(this.state.path, itemName));
    }

    handleUpMove(steps) {
        this.handleNewPath(goUp(this.state.path, steps));
    }

    handleNewPath(newPath) {
        this.setState((prevState, props) => {
  return {path:  newPath};
});
    }
    render() {
        return (
            <div>
                <SearchBar inline items={flatten(this.props.root)}/>
                <PathView inline path={this.state.path} goUp={this.handleUpMove}/>
                <Directory
                    items={getItem(this.state.root, this.state.path).children}
                    onPathIncrement={this.handlePathIncrement}/>
            </div>
        );
    }
}
export default Finder;