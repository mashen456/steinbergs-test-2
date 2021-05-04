import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Database extends Component{
    constructor(props) {
        super(props);
        this.state = {
            aufgabe: ""
        }
    }

    componentDidMount() {
        console.log("comp did mount");
    }

    render() {
        return (
            <div className='db'>
                <h1>Database</h1>

            </div>
        );
    }
}

export default Database;
