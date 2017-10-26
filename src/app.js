import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './components/PeriodicTable'


const appRoot = document.getElementById('app');
ReactDOM.render( <PeriodicTable />, appRoot );

console.log("From App JS");