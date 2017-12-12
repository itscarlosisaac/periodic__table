import React from 'react';
import Modal from 'react-modal';

class ElementModal extends React.Component{
    render(){
        const { number, summary, category, period, name, symbol, source, atomic_mass, density, melt } = this.props.data;
        
        return (
            <Modal 
                isOpen={this.props.isOpen}
                onRequestClose={this.props.handleCloseModal}
                closeTimeoutMS={0}
                className="element__modal"
            >
                <article className="modal__box">
                    <div className="close__modal" onClick={this.props.handleCloseModal}></div>
                    <header className="modal__header">
                        <div className="prev__element">

                        </div>
                        <div className="prev__arrow"></div>
                        <div className="current__element">
                            <span className="modal__number">{number}</span>
                            <span className="modal__symbol">{symbol}</span>
                            <span className="modal__name">{name}</span>
                            <span className="modal__atomic__mas">{atomic_mass}</span>
                        </div>
                        <div className="next__arrow"></div>

                        <div className="next__element">
                        </div>
                    </header>
                    <div className="modal__body">
                        <div className="modal__desc">
                            <p>{summary}</p>
                        </div>
                        <div className="modal__features">
                            <h3 className="general">General Properties</h3>
                            <div className="features">
                                <div className="feature">
                                    <h3>Atomic Number</h3>
                                    <span>{number}</span>
                                </div>
                                <div className="feature">
                                    <h3>Period</h3>
                                    <span>{period}</span>
                                </div>
                                <div className="feature">
                                    <h3>Category</h3>
                                    <span>{category}</span>
                                </div>
                                <div className="feature">
                                    <h3>Density</h3>
                                    <span>{density}</span>
                                </div>
                                <div className="feature">
                                    <h3>Melt</h3>
                                    <span>{melt}</span>
                                </div>
                            </div>
                        </div>
                        <footer className="modal__footer">
                            <a target="_blank" href={source}>Learn More</a>
                        </footer>
                    </div>    
                </article>
            </Modal>
        );
    }
}

export default ElementModal;