import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {handleModal, handleTab} from "../store/actions/mainActions";

import {consts} from '../config/config';

class PageCounter extends Component {



    render() {

        let pageNumber;

        if (this.props.currentTab === consts.POSTS_TAB)
            pageNumber = this.props.postPageNumber;

        else if (this.props.currentTab === consts.PROGRAMS_TAB)
            pageNumber = this.props.programPageNumber;

        else if (this.props.currentTab === consts.MEDIAS_TAB)
            pageNumber = this.props.mediaPageNumber;


        return (
            <div className='dis-flex page-counter p-t-30'>

                <div className='arrow right clickable m-l-10'/>
                <div>صفحه {pageNumber+1}</div>
                <div className='arrow left clickable m-r-10'/>

            </div>
        );
    }

}

const mapStateToProps = state => ({
    currentTab: state.data.currentTab,

    programs: state.data.programs,
    media: state.data.media,


    programPageNumber: state.data.programPageNumber,
    postPageNumber: state.data.postPageNumber,
    mediaPageNumber: state.data.mediaPageNumber,
});

export default connect(mapStateToProps, {handleModal, handleTab})(PageCounter);