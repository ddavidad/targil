import React, {Component} from 'react';
import './App.css';
import Title from './components/title'
import Finder from './components/finder'

class App extends Component {
    render() {
        var data = require('./components/data.json');

        return (
            <div className="App">
                <div className="App-header">
                    <Title/>
                </div>
                <Finder root={data}/>
                    
            </div>
        );
    }
}

export default App;