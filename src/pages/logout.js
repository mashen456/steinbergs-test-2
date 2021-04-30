import React from 'react';
import {firebaseApp} from "../firebase";

function LogOut() {

    firebaseApp.auth().signOut();

    return (
        <div className='logout'>
            <h1>You are logged out</h1>
        </div>
    );
}

export default LogOut;