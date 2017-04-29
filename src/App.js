import React, {Component} from 'react';
import './App.css';
import Title from './components/title'
import Finder from './components/finder'

class App extends Component {
    render() {
        var data = {
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
} 
;

        return (
            <div className="App">
                <div className="App-header">
                    <Title/>
                </div>
                <Finder dir={data}/>
            </div> 
        );
    }
}

export default App;