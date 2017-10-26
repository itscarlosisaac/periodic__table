import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './components/PeriodicTable';
import getData from './services/elements';

// getData().then( (d) => {
//     data = d
// })



const appRoot = document.getElementById('app');
ReactDOM.render( <PeriodicTable />, appRoot );

console.log("From App JS");