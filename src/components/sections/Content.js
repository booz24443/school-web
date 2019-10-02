import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import pic from '../../assets/images/2.jpg';
import microphone from '../../assets/images/microphone.svg';
import calendar from '../../assets/images/calendar.svg';
import {consts, getRequest, log, postRequest, URLS} from "../../config/config";

import {handleModal, handleTab, handlePosts} from '../../store/actions/mainActions';
import PageCounter from "../PageCounter";
import FilterModal from "../modal/FilterModal";

/*
* this component contains post lists
* */
class Content extends Component {

    constructor() {
        super();

        this.state = {
            grade: 'همه رشته ها',
            field: 'همه پایه ها'
        };

        this.handleTab = this.handleTab.bind(this);
        this.handleProgramFilter = this.handleProgramFilter.bind(this);
    }

    componentDidMount() {

        this.props.handlePosts(consts.POST, consts.CHUNK_COUNT, 0);
    }

    handleTab(e) {

        if (this.postTab.contains(e.target)) {
            this.props.handleTab(consts.POST); // handle tab and fetchContent seprately
            this.props.handlePosts(consts.POST, consts.CHUNK_COUNT, 0);

        } else if (this.programTab.contains(e.target)) {
            this.props.handleTab(consts.PROGRAM);
            this.props.handlePosts(consts.PROGRAM, consts.CHUNK_COUNT, 0);

        } else if (this.mediaTab.contains(e.target)) {
            this.props.handleTab(consts.MEDIA);
            this.props.handlePosts(consts.MEDIA, consts.CHUNK_COUNT, 0);
        }
    }

    handleProgramFilter() {
        this.props.handleModal(consts.PROGRAM_FILTER_MODAL);
    }

    render() {

        let filter;
        let items;

        if (this.props.currentTab === consts.POST) {
            items = this.props.posts.map(post =>
                    <div className='item'>

                        <img className='thumbnail' src={pic} />
                        <div className='title'>{post.title}</div>
                        <div className='desc m-t-10'>{post['preview_content']}</div>
                        <div className='date'>{post['created_at']}</div>

                    </div>
                )

        } else if (this.props.currentTab  === consts.PROGRAM) {

            items =
                <>

                    <div className='item media dis-flex'>

                        <img className='thumbnail-media' src={calendar} />

                        <div className='media-detail'>
                            <div className='title'>اطلاعیه کلاس اول ها</div>
                            <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                            <div className='date'>1398-03-25</div>

                        </div>

                    </div>

                </>;

            filter =
                <div className='filter-con dis-flex'>

                    <FilterModal /> {/* modal is completely handled by redux */}

                    <div className='filter dis-flex  m-l-15'>
                        <div className='type'>پایه : </div>
                        <div className='selected' onClick={this.handleProgramFilter}>
                            {this.state.grade}
                            <div className='arrow-down '/>
                        </div>
                    </div>

                    <div className='filter dis-flex'>
                        <div className='type'>رشته : </div>
                        <div className='selected' onClick={this.handleProgramFilter}>
                            {this.state.field}
                            <div className='arrow-down'/>
                        </div>
                    </div>

                </div>

        } else if (this.props.currentTab  === consts.MEDIA) {

            items =
                <>

                    <div className='item media dis-flex'>

                        <img className='thumbnail-media' src={microphone} />

                        <div className='media-detail'>
                            <div className='title'>اطلاعیه کلاس اول ها</div>
                            <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                            <div className='date'>1398-03-25</div>

                        </div>

                    </div>


                </>;
        }


        return (
            <Element className='content-container'  name="content">


                <div className='shape red'/>
                <div className='shape gray'/>


                {/* Category Tabs */}
                <div className='categories'>

                    <div className={(this.props.currentTab === consts.POST)? 'category-item selected': 'category-item'}
                         ref={node =>  this.postTab=node} onClick={this.handleTab}>اطلاعیه ها</div>

                    <div className={(this.props.currentTab === consts.PROGRAM)? 'category-item selected': 'category-item'}
                         ref={node =>  this.programTab=node} onClick={this.handleTab}>برنامه ها</div>

                    <div className={(this.props.currentTab === consts.MEDIA)? 'category-item selected': 'category-item'}
                         ref={node =>  this.mediaTab=node} onClick={this.handleTab}>رسانه ها</div>

                </div>



                <div className='break-line-head'/>

                {filter}

                <div className='list-container'>
                    {items}
                </div>



                <PageCounter/>


                <div className='break-line p-b-30'/>

            </Element>
        );
    }
}

const mapStateToProps = state => ({
    currentTab: state.data.currentTab,

    posts:  state.data.posts,
    postField: state.data.postField,
    postGrade: state.data.postGrade,

    grades: state.data.grades,
    fields: state.data.fields,

    programs: state.data.programs,
    media: state.data.media,
});

export default connect(mapStateToProps, {handleModal, handleTab, handlePosts})(Content);