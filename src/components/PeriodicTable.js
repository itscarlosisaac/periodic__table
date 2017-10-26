import React from 'react';
import Elements from './Elements';
import axios from 'axios';

class PeriodicTable extends React.Component {
    state = {
        elements: []
    };

    componentDidMount () {
        const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';
        this.serverRequest = 
          axios.get(url)
            .then((result) => {    
              this.setState({
                elements: result.data.elements
              });
            })
      }

    render() {
        return ( 
            <div>
                PeriodicTable 
                <Elements elements={this.state.elements} />
            </div>
        );
    }
}


export default PeriodicTable;