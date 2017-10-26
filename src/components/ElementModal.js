import React from 'react';
import Modal from 'react-modal';

class ElementModal extends React.Component{
    render(){
        return (
            <Modal 
                isOpen={false}
            >
                Content
            </Modal>
        );
    }
}

export default ElementModal;