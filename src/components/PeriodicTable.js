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
        hoveredData: {},
        boilingPoint: {},
        isOpen: false,
        modalData: {},
        filtered: []
    };

    handleModal = (e) => {
        const symbol = e.target.dataset.symbol;
        const data = this.state.elements.filter( (element) => {
            return element.symbol == symbol
        });

        this.setState( () => ({ isOpen: true, modalData: data[0] }) );
    }

    handleCloseModal = () => {
        this.setState( () => ({ isOpen: false }) );
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
                    categories: categories,
                    hoveredData: result.data.elements[0]
            });
        })
    }

    handleHover = (data) => {
        this.setState( () => ({ hoveredData: data }) );
    }

    handleFilter = (e) => {
        const targetContent = e.target.textContent.toLowerCase().trim().replace(/[ -]/g, '_');
        if( !e.target.classList.contains('category--checked') ){
            e.target.classList.add('category--checked')
            this.setState( (prev) => ({ filtered: prev.filtered.concat(targetContent) }) ) ;
            let tempElements = this.state.filtered.filter( (cat) => {
                return document.querySelectorAll(`.elements .element:not(.${cat})`)
            });
        }
        else{
            e.target.classList.remove('category--checked')
            const tempState = this.state.filtered;
            tempState.splice(tempState.indexOf(targetContent), 1 );
            this.setState( () => ({ filtered: tempState }) ) ;
        }
    }

    handleBoilingPoint = (e) => {
        this.setState( () => ({boilingPoint:e}) );
        const elements = document.querySelectorAll('[data-boil]');
    
        elements.forEach( (e) => {
            if(this.state.boilingPoint.kelvin > e.dataset.boil){
                e.classList.add('solid')
            }else{
                e.classList.remove('solid');
            }
        })
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
                <ElementTypeBox types={this.state.types} />
                <ElementCategoryBox categories={this.state.categories} handleFilter={this.handleFilter} />    
                <TemperatureSlider handleBoilingPoint={this.handleBoilingPoint} />
                <ElementModal isOpen={this.state.isOpen} data={this.state.modalData} handleCloseModal={this.handleCloseModal} />
                { /* <Header /> */ }
            </div>
        );
    }
}

export default PeriodicTable;