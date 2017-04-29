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

        this.handlePathIncrement = this.handlePathIncrement.bind(this);

        this.handleNewPath = this.handleNewPath.bind(this);

        this.handleUpMove = this.handleUpMove.bind(this);

        this.handleFileDelete = this.handleFileDelete.bind(this);

        this.handleItemSubmit = this.handleItemSubmit.bind(this);

        this.state = 
        {
            dir:{
                    "type": "folder",
                    "name": "animals",
                    "children": [
                    {
                        "type": "folder",
                        "name": "cat",
                        "children": [
                        {
                            "type": "folder",
                            "name": "images",
                            "children": [
                            {
                                "type": "file",
                                "name": "cat001.jpg"
                            }, {
                                "type": "file",
                                "name": "cat002.jpg"
                            }
                            ]
                        }
                        ]
                    },
                    {
                        "type": "file",
                        "name": "bear.png"
                    },
                    {
                        "type": "folder",
                        "name": "dog",
                        "children": [
                        {
                            "type": "folder",
                            "name": "images",
                            "children": [
                            {
                                "type": "file",
                                "name": "dog001.jpg"
                            }, {
                                "type": "file",
                                "name": "dog002.jpg"
                            }
                            ]
                        }
                        ]
                    },
                    {
                        "type": "file",
                        "name": "horse.png"
                    }
                    ] 
                },
            path: "/"
        };
    }

    handlePathIncrement(itemName) { this.handleNewPath(goDown(this.state.path, itemName));  }

    handleUpMove(steps){ this.handleNewPath(goUp(this.state.path, steps));}

    handleNewPath(newPath) { this.setState({ path: newPath, dir: getItem(this.props.dir, newPath) });}



    handleFileDelete(itemName) {
        var newDir = this.state.dir;
        var index = 0;
        for (var i = 0; i < newDir.children.length; i++) {
            if(newDir.children[i].name === itemName)
            {
                index = i;
                break;
            }
        }
        newDir.children.splice(index,1);
        this.setState(newDir);
    }

    handleItemSubmit(item) {
        var newdir = this.state.dir;
        var newItem = item;
        newdir.children.push({name : newItem.name,
        type: newItem.type});
        //this.setState(prev => ({dir:{ children: prev.dir.children.concat(item) }}));
        this.setState(newdir);
    }

    render() {
        const currentDir = this.state.dir;
        const currentPath = this.state.path;
        const searchableData =flatten(currentDir);
        return (
            <div>
                <SearchBar inline searchableData={searchableData}/>
                <PathView inline path={currentPath} goUp={this.handleUpMove}/>
                <Directory
                    item={currentDir}
                    onPathIncrement={this.handlePathIncrement}
                    onItemDelete={this.handleFileDelete}/>
                <h3>create a new file/directory</h3>
                <ItemForm onItemSubmit={this.handleItemSubmit}/>
            </div>
        );
    }
}
export default Finder;