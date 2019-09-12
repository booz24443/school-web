import React, {Component} from 'react';
import Modal from 'react-responsive-modal';

class FilterModal extends Component {


    render() {
        return (
            // open attribute => true opens modal, false closes modal
            // onClose is executed by module itself
            // react-responsive-modal detects outside click itself and executes onClose
            <Modal open={(this.props.show.modal && this.props.show.hide === false)? true: false} showCloseIcon={false} focusTrapped={false} blockScroll={false}
                   onClose={(e) => this.props.hideModal(true)}
                   center>

                <div className='modal-container'></div>

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

            </Modal>
        );
    }
}

export default FilterModal;