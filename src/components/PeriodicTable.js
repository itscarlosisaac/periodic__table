import axios from 'axios';
import React from 'react';
import Elements from './Elements';
import ElementModal from './ElementModal';
import TemperatureSlider from './TemperatureSlider';
import ElementInfoBox from './ElementInfoBox';
import ElementCategoryBox from './ElementCategoryBox';
import ElementTypeBox from './ElementTypeBox';
import Header from './Header'

class PeriodicTable extends React.Component {
    state = {
        elements: [],
        types: [],
        categories: [],
        hoveredData: {}
    };

    handleModal = () => {
        console.log("open modal");
    }

    componentDidMount () {
        const phases = [];
        const categories = []
        const url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json';
        axios.get(url)
            .then((result) => {    
                result.data.elements.map( (e) => {
                     phases.indexOf(e.phase) > -1 ? false : phases.push(e.phase)
                     categories.indexOf(e.category) > -1 ? false : categories.push(e.category)
                })
                phases.push('Unknown');
                this.setState({
                    elements: result.data.elements,
                    types: phases,
                    categories: categories
            });
        })
    }

    handleHover = (data) => {
        this.setState( () => ({
            hoveredData: data
        }))
    }

    render() {
        return ( 
            <div className="periodic__table">
                <Elements 
                    handleHover={this.handleHover}
                    elements={this.state.elements}
                    handleModal={this.handleModal}
                />
                <ElementInfoBox hoveredData={this.state.hoveredData} hovered={this.handleHover} />
                <ElementTypeBox types={this.state.types}/>
                <ElementCategoryBox categories={this.state.categories} />    
                <TemperatureSlider />
                { /* <ElementModal />  <Header />*/}
            </div>
        );
    }
}

export default PeriodicTable;