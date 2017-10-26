import React from 'react';
import Elements from './Elements';
import GetData from '../services/ElementService';
import axios from 'axios';

class PeriodicTable extends React.Component {
    state = {
        elements: {}
    };

    componentDidMount() {
        const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';
        axios.get(url)
            .then((result) => {
                this.setState( () => ({elements: result.data.elements}) );
            })
            .catch((e) => {
                console.log(`Error fetching the data. ${e}`);
            });
    }

    render() {
        return ( 
            <div>
                PeriodicTable 
                <Elements />
            </div>
        );
    }
}


export default PeriodicTable;