import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from "react-responsive-modal";
import {handleModal} from '../../store/actions/mainActions';

class ModalTemplate extends Component {

    render() {
        return (
            <Modal open={!!(this.props.show)} showCloseIcon={false} focusTrapped={false} blockScroll={false}
                   onClose={(e) => this.props.handleModal(false)}
                   center>

                <div className='modal-container'>

                    {this.props.children}

                </div>

            </Modal>
        );
    }
}


const mapStateToProps = state => ({
    show: state.data.showModal,
});

export default connect(mapStateToProps, {handleModal})(ModalTemplate);