import React from "react";
import Element from './Element';

class Elements extends React.Component {
    render() {
        return ( 
            <div>
            { this.props.elements.map((element) => {
                return (
                        <Element
                            key={element.number}
                            atomic_number={element.number} 
                            symbol={element.symbol} 
                            name={element.name} 
                            atomic_mass={element.atomic_mass} 
                            category={element.category} 
                            xpos={element.xpos}
                            ypos={element.ypos}
                            handleModal={this.props.handleModal}
                        />
                    )
                })
            } 
            </div>
        )
    }
}

export default Elements;