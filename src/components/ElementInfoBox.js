import React from 'react';

class ElementInfoBox extends React.Component{
    render(){
        return (
            <div className={`element__info__box ${this.props.hoveredData.category}`}>
                <span className="element__info__box__number">{this.props.hoveredData.atomic_number}</span>
                <h1 className="element__info__box__title">{this.props.hoveredData.symbol}</h1>
                <p className="element__info__box__name">{this.props.hoveredData.name}</p>
                <p className="element__info__box__mass">{this.props.hoveredData.atomic_mass}</p>
            </div>
        )
    }
}

export default ElementInfoBox;