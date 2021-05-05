import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {firebaseDB} from "../firebase";

class Database extends Component{
    constructor(props) {
        super(props);
        this.state = {
            aufgaben: ""
        }
    }

    componentDidMount() {
        console.log("comp did mount");
        const preObject = document.getElementById("object");
        firebaseDB.child("firmen").on('value', (snap) => {
            console.log("db snap ", snap.val());
            preObject.innerText = JSON.stringify(snap.val());
        });
    }

    render() {
        return (
            <div className='db'>
                <h1>Database</h1>
                <pre id='object'>

                </pre>
            </div>
        );
    }
}

export default Database;
