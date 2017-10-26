import React from 'react';

class Element extends React.Component{
    render(){
        return(
            <div className={`element ${this.props.category}`}>
                <span>{this.props.atomic_number}</span>
                <h1>{this.props.symbol}</h1>
                <p>{this.props.name}</p>
                <p>{this.props.atomic_mass}</p>
            </div>
        )
    }
}

export default Element;