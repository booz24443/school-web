import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from "react-responsive-modal";

class ModalTemplate extends Component {

    render() {
        return (
            <Modal open={!!(this.props.show.modal)} showCloseIcon={false} focusTrapped={false} blockScroll={false}
                   onClose={(e) => this.props.showModal(false)}
                   center>

                <div className='modal-container'>

                    {this.props.children}

                </div>

            </Modal>
        );
    }
}


const mapStateToProps = state => ({
    showModal: state.data.showModal,
});

export default connect(mapStateToProps, {showModal})(ModalTemplate);