import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import {handleModal, handleLogged} from '../../store/actions/mainActions';
import ModalTemplate from "./ModalTemplate";

class LoginModal extends Component {

    constructor() {
        super();


        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        /* TODO: fetch fields and grades */

    }

    handleLogin() {

        /*TODO: authenticate with server */

        this.props.handleLogged(true);
        this.props.handleModal(false);

    }



    render() {
        return (
            <ModalTemplate>


                <input className="input-phone" type="number" name="phoneNumber"  placeholder="کد ملی"/>
                <input className="input-phone" type="password" name="phoneNumber"  placeholder="رمز عبور"/>



                <div onClick={this.handleLogin}>ورود</div>
                <div>ورود به عنوان اولیا</div>

                <div>فراموشی پسورد</div>


            </ModalTemplate>
        );
    }
}

const mapStateToProps = state => ({
    showModal: state.data.showModal,
});

export default connect(mapStateToProps, {handleModal, handleLogged})(LoginModal);