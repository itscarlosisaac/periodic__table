import React from 'react';

class ElementCategoryBox extends React.Component{
    render(){
        return(
            <div>
                ElementCategoryBox.js
                {this.props.categories}
            </div>
        )
    }
}

export default ElementCategoryBox;