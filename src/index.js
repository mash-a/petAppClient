import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import Auth from './utils/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const auth = new Auth();

let state = {};
window.setState = changes => {
    state = Object.assign({}, state, changes);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/
let username = auth.getProfile().given_name || "";

let initialState = {
    name: username,
    location: location.pathname.replace(/^\/?|\/$/g, ""),
    auth,
}

window.setState(initialState);
