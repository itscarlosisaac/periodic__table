import React from 'react';

class HRules extends React.Component{
    count = 8;
    
    render(){
        let list = [];
        for (let i = 1 ; i < this.count; i++) {
            list.push(   <div key={`h__rule__${i}`} className="h__rule__line">
                                 <span className="h__rule__num">{i}</span>
                              </div> );
        }
        return(
            <div className="h__rule">
                {list}
            </div>
        )
    }
}

export default HRules;