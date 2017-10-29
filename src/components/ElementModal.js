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


// const OptionModal = (props) => {
//     return (
//         <Modal 
//             isOpen={!!props.selectedOption} // Convert to real boolean values
//             contentLabel="Selected Option"
//             onRequestClose={props.handleClearSelectedOption}
//             closeTimeoutMS={300}
//             className="modal"
//         >
//             <h3 className="modal__title">Selected Option</h3>
//             {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
//             <button className="button" onClick={props.handleClearSelectedOption}> Okay </button>
//         </Modal>
//     )
// }
