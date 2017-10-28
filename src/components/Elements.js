import React from "react";
import Element from './Element';
import HRules from './HRules';
import VRules from './VRules';

class Elements extends React.Component {
    render() {
        return ( 
            <div className="elements">
            <HRules />
            <VRules />
            { this.props.elements.map((element) => {
                return (
                        <Element
                            handleHover={this.props.handleHover}
                            key={element.number}
                            atomic_number={element.number} 
                            symbol={element.symbol} 
                            name={element.name} 
                            atomic_mass={element.atomic_mass} 
                            category={element.category} 
                            xpos={element.xpos}
                            ypos={element.ypos}
                            handleModal={this.props.handleModal}
                            boilingPoint={element.boil}
                        />
                    )
                })
            } 
            </div>
        )
    }
}

export default Elements;