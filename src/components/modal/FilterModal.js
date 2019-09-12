import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import {showModal} from '../../store/actions/mainActions';
import ModalTemplate from "./ModalTemplate";

class FilterModal extends Component {


    render() {
        return (
            <ModalTemplate>

                <option value="volvo" >همه پایه ها</option>
                <option value="saab">نهم</option>
                <option value="mercedes">دهم</option>
                <option value="audi">یازدهم</option>
                <option value="audi">دوازدهم</option>


                <option value="volvo">همه رشته ها</option>
                <option value="volvo">ریاضی</option>
                <option value="saab">فیزیک</option>
                <option value="mercedes">زیست</option>
                <option value="audi">هنر</option>

            </ModalTemplate>
        );
    }
}

const mapStateToProps = state => ({
    showModal: state.data.showModal,
});

export default connect(mapStateToProps, {showModal})(FilterModal);