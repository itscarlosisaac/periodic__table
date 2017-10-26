import React from 'react';
import ReactDOM from 'react-dom';
import PeriodicTable from './components/PeriodicTable';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import axios from 'axios';

const appRoot = document.getElementById('app');
ReactDOM.render( <PeriodicTable />, appRoot );

console.log("From App JS");