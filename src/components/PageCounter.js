import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {handleModal, handleTab, handlePosts} from "../store/actions/mainActions";

import {consts, getRequest} from '../config/config';

class PageCounter extends Component {

    constructor() {
        super();


        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(newPageNumber) {

        // check if page number is not < 0

        if (newPageNumber < 1) return;

        this.props.handlePosts(this.props.currentTab, consts.CHUNK_COUNT, newPageNumber);



    }


    render() {

        let pageNumber;

        if (this.props.currentTab === consts.POST)
            pageNumber = this.props.postPageNumber;

        else if (this.props.currentTab === consts.PROGRAM)
            pageNumber = this.props.programPageNumber;

        else if (this.props.currentTab === consts.MEDIA)
            pageNumber = this.props.mediaPageNumber;


        return (
            <div className='dis-flex page-counter p-t-30'>

                <div className='arrow right clickable m-l-10' onClick={() => this.handlePageChange(pageNumber+2)}/>
                <div>صفحه {pageNumber+1}</div>
                <div className='arrow left clickable m-r-10' onClick={()  => this.handlePageChange(pageNumber)}/>

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

export default connect(mapStateToProps, {handleModal, handleTab, handlePosts})(PageCounter);