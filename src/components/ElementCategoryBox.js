import React from 'react';

class ElementCategoryBox extends React.Component{
    render(){

        const categories = this.props.categories.filter( (cat) => { return !cat.includes('unknown') });
        const metals = categories.filter( (cat) => {
            return cat.includes('metal') && !cat.includes('nonmetal') && !cat.includes('metalloid') || cat == "lanthanide" || cat == "actinide"
        });
        const nonmetals = ["Noble Gases", "Other Nonmetals"] 
        const metalloid = "Metalloid";

        return(
            <div className="element__category__box">
                <div className="element__category__metals">
                    <div>
                        {
                            metals.map( (metal) => {
                                return <p key={metal} className={metal}>{metal} </p>
                            })
                        }
                    </div>
                </div>
                <div className="element__category__metaloids">
                    <div> 
                        <p className={metalloid}>{metalloid} </p>
                    </div>
                </div>
                <div className="element__category__nonmetals">
                    <h2>NON-METALS</h2>
                    <div>
                        {
                            nonmetals.map( (nonmetal) => {
                                return <p key={nonmetal} className={nonmetal}>{nonmetal} </p>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ElementCategoryBox;