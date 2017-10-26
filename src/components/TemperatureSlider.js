import React from 'react'

class TemperatureSlider extends React.Component{
    render(){
        return (
            <div>
                <form>
                    <input type="range" name="temp__slider" />
                </form>
                <p>K <span>degrees</span></p>
                <p>C <span>degrees</span></p>
                <p>F <span>degrees</span></p>
            </div>
        )
    }
}

export default TemperatureSlider; 