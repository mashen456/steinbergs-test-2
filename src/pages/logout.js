import React from 'react';
import {Redirect} from 'react-router-dom';
import {firebaseApp} from "../firebase";

function LogOut() {

    firebaseApp.auth().signOut();
    window.location = "/signin";

    return (
        <Redirect to="/signin" />
    );
}

export default LogOut;