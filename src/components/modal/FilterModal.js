import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-responsive-modal';

import {handleModal} from '../../store/actions/mainActions';
import ModalTemplate from "./ModalTemplate";

class FilterModal extends Component {



    componentDidMount() {

        if (this.props.grades === [] && this.props.fields === []) { // if grades/fields was not fetched before

            // TODO: fetch the shit

        }

    }

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
    grades : state.data.grades,
    fields: state.data.fields
});

export default connect(mapStateToProps, {handleModal})(FilterModal);