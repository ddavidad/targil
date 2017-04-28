import React, {Component} from 'react';
import Directory from './directory';
import PathView from './pathView';
import SearchBar from './search';
import {getItem, goDown, goUp} from './pathCommon';
import {flatten} from './pathCommon';
import ItemForm from './ItemForm';

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

            this.handleFileDelete = this
            .handleFileDelete
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
            return {path: newPath};
        });
    }

    handleFileDelete(name) {
        var newDir = this.state.root;
        var index = 0;
        for (var i = 0; i < newDir.children.length; i++) {
            if(newDir.children[i].name === name){
                index = i;
                break;
            }
        }
        newDir.children.splice(index,1);
        this.setState(newDir);
    }

    handleItemSubmit(item) {
        var newDir = this.state.root;
        newDir.children.add(item);
        this.setState(newDir);
    }

    render() {
        return (
            <div>
                <SearchBar inline items={flatten(this.props.root)}/>
                <PathView inline path={this.state.path} goUp={this.handleUpMove}/>
                <Directory
                    items={getItem(this.state.root, this.state.path).children}
                    onPathIncrement={this.handlePathIncrement}
                    onItemDelete={this.handleFileDelete}/>
                <h3>create a new file/directory</h3>
                <ItemForm onItemSubmit={this.handleItemSubmit}/>
            </div>
        );
    }
}
export default Finder;