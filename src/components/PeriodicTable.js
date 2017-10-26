import axios from 'axios';
import React from 'react';
import Elements from './Elements';
import ElementModal from './ElementModal';

class PeriodicTable extends React.Component {
    state = {
        elements: []
    };

    handleModal = () => {
        console.log("open modal");
    }

    componentDidMount () {
        const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';
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
                <Elements 
                    elements={this.state.elements}
                    handleModal={this.handleModal}
                />
                <ElementModal />
            </div>
        );
    }
}


export default PeriodicTable;