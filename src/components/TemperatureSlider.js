import React from 'react'

class TemperatureSlider extends React.Component{
    
    state = {
        celsius: 0,
        kelvin: 0,
        farenheit: 0
    }
    changeSlider = (e) => {
        let value = parseInt( e.target.value );
        this.setState( () => ({
            celsius: (value - 273.15).toFixed(2),
            kelvin: value,
            farenheit: ((value * 9 / 5)  - 459.67).toFixed(2)
        } ) );
        setTimeout( () => {
            this.props.handleBoilingPoint(this.state);
        }, 1)
    }
    
    render(){
        return (
            <div className="element__temperature">
                <form>
                    <input onChange={this.changeSlider} type="range" min="0" max="6000" step="50" name="temp__slider" />
                </form>
                <div className="element__temperature__data">
                    <p className="element__temperature__title">	&#8451; <span id="celsius">{this.state.celsius}</span></p>
                    <p className="element__temperature__title">	&#8457; <span id="faren">{this.state.farenheit}</span></p>
                    <p className="element__temperature__title"> &#8490; <span id="kelvin">{this.state.kelvin}</span></p>
                </div>
            </div>
        )
    }
}

export default TemperatureSlider; 