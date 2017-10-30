import React from 'react';

class ElementTypeBox extends React.Component{
    render(){
        return(
            <div className="types__box">
                {this.props.types.map( (type) => {
                        return (
                            <div 
                                key={type.toLowerCase()} 
                                className={type.toLowerCase() + " types__box__title"} >
                              <span className="types__box__inner"><span className="types__box__inner-checked"></span></span>
                              {type}
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export default ElementTypeBox;