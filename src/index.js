import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';

let state = {};
window.setState = changes => {
    state = Object.assign({}, state, changes);

    ReactDOM.render(<App {...state}/>, document.getElementById('root'));
}

/* eslint no-restricted-globals: 0*/
let initialState = {
    name: 'Mariya',
    location: location.pathname.replace(/^\/?|\/$/g, "")
}

window.setState(initialState);