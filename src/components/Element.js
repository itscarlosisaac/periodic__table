import React from 'react';

class Element extends React.Component{
    handleHover = (e) => {
        e.preventDefault();
        this.props.handleHover({
                "name": this.props.name,
                "symbol": this.props.symbol,
                "number": this.props.atomic_number,
                "atomic_mass": this.props.atomic_mass,
                "category": this.props.category.replace(/-| /g, '_')
            }
        );
    }
    render(){
        var position = {
            left:  (this.props.xpos * 72) - 72,
            top:  (this.props.ypos * 72) - 72
          };
        return(
            <div
                style={position}
                className={`element ${this.props.category.replace(/-| /g, '_') }` }
                onClick={this.props.handleModal}
                onMouseOver={this.handleHover}
                data-boil={this.props.boilingPoint}
                data-symbol={this.props.symbol}
            >
                <span className="element__number">{this.props.atomic_number}</span>
                <h1 className="element__title">{this.props.symbol}</h1>
                <p className="element__name">{this.props.name}</p>
                <p className="element__mass">{this.props.atomic_mass.toFixed(3)}</p>
            </div>
        )
    }
}

export default Element;
