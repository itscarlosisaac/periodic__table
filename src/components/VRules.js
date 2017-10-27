import React from 'react';

class VRules extends React.Component{
    count = 19;
    
    render(){
        let list = [];
        for (let i = 1 ; i < this.count; i++) {
            list.push(   <div key={`v__rule__${i}`} className="v__rule__line">
                                 <span className="v__rule__num">{i}</span>
                              </div> );
        }
        return(
            <div className="v__rule">
                {list}
            </div>
        )
    }
}

export default VRules;