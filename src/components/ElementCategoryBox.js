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
                    <h2 className="element__category__title">METALS</h2>
                    <div>
                        {
                            metals.map( (metal) => {
                                return <p key={metal} className={`element__cat ${metal.toLowerCase().replace(/-| /g, '_')}`}>{metal} </p>
                            })
                        }
                    </div>
                </div>
                <div className="element__category__section">
                    <div className="element__category__metaloids">
                    <h2 className="element__category__title">METALOIDS</h2>
                        <div> 
                            <p className={`element__cat ${metalloid.toLowerCase()}`}>{metalloid} </p>
                        </div>
                    </div>
                    <div className="element__category__nonmetals">
                        <h2 className="element__category__title">NON-METALS</h2>
                        <div>
                            {
                                nonmetals.map( (nonmetal) => {
                                    return <p key={nonmetal} className={`element__cat ${nonmetal.toLowerCase().replace(/-| /g, '_')}`}>{nonmetal} </p>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ElementCategoryBox;