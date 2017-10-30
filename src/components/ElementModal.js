import React from 'react';
import Modal from 'react-modal';

class ElementModal extends React.Component{
    render(){
        console.log(this.props)
        return (
            <Modal 
                isOpen={this.props.isOpen}
                onRequestClose={this.props.handleCloseModal}
                closeTimeoutMS={0}
                className="element__modal"
            >
                <h3>{this.props.data.name}</h3>
            </Modal>
        );
    }
}

export default ElementModal;