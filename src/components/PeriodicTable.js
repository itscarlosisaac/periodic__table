import React from 'react';
import Elements from './Elements';
import Axios from 'axios';

class PeriodicTable extends React.Component { 
    render(){
        return(
            <div>
                PeriodicTable
                <Elements />
            </div>
        )
    }
}

export default PeriodicTable;