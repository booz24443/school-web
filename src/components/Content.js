import React, {Component} from 'react';

import pic from '../assets/images/2.jpg';
import microphone from '../assets/images/microphone.svg';
import calendar from '../assets/images/calendar.svg';
import {consts} from "../config/config";

import {handleModal} from '../store/actions/mainActions';

class Content extends Component {

    constructor() {
        super();

        this.state = {
            cTab: consts.POSTS_TAB,
            grade: 'همه رشته ها',
            field: 'همه پایه ها'
        };


        this.handleTab = this.handleTab.bind(this);
        this.handleProgramFilter = this.handleProgramFilter.bind(this);
    }

    handleTab(e) {

        if (this.postTab.contains(e.target)) {
            this.setState({cTab: consts.POSTS_TAB});

        } else if (this.programTab.contains(e.target)) {
            this.setState({cTab: consts.PROGRAMS_TAB});

        } else if (this.mediaTab.contains(e.target)) {
            this.setState({cTab: consts.MEDIAS_TAB});

        }
    }

    handleProgramFilter() {

    }

    render() {

        let filter;
        let items;

        if (this.state.cTab === consts.POSTS_TAB) {
            items =
                <>

                    <div className='item'>

                        <img className='thumbnail' src={pic} />
                        <div className='title'>اطلاعیه کلاس اول ها</div>
                        <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                        <div className='date'>1398-03-25</div>

                    </div>

                    <div className='item'>

                        <img className='thumbnail' src={pic} />
                        <div className='title'>اطلاعیه کلاس اول ها</div>
                        <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                        <div className='date'>1398-03-25</div>

                    </div>

                    <div className='item'>

                        <img className='thumbnail' src={pic} />
                        <div className='title'>اطلاعیه کلاس اول ها</div>
                        <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                        <div className='date'>1398-03-25</div>

                    </div>

                    <div className='item'>

                        <img className='thumbnail' src={pic} />
                        <div className='title'>اطلاعیه کلاس اول ها</div>
                        <div className='desc m-t-10'>این اطلاعیه که میگه فلان فلان هست و اینطوزیه</div>
                        <div className='date'>1398-03-25</div>

                    </div>


                </>


        } else if (this.state.cTab === consts.PROGRAMS_TAB) {

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


                    <div className='filter dis-flex  m-l-15'>
                        <div className='type'>پایه : </div>
                        <div className='selected' onClick={this.handleProgramFilter}>
                            {this.state.grade}
                            <div className='arrow-down m-t-5 m-r-5'/>
                        </div>

                    </div>

                    <div className='filter dis-flex'>
                        <div className='type'>رشته : </div>
                        <div className='selected' onClick={this.handleProgramFilter}>
                            {this.state.field}
                            <div className='arrow-down m-t-5 m-r-5'/>
                        </div>
                    </div>

                </div>

        } else if (this.state.cTab === consts.MEDIAS_TAB) {

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
            <div className='content-container'>

                <svg width="500" height="500" className='svg-con'>
                    <rect x="0" y="0" rx="30" ry="30" width="500" height="500" className='svg-inner' />
                </svg>

                <svg width="500" height="500" className='svg-con1'>
                    <rect x="0" y="0" rx="30" ry="30" width="500" height="500" className='svg-inner1' />
                </svg>

                <div className='categories'>

                    <div className={(this.state.cTab === consts.POSTS_TAB)? 'category-item selected': 'category-item'}
                         ref={node =>  this.postTab=node} onClick={this.handleTab}>اطلاعیه ها</div>

                    <div className={(this.state.cTab === consts.PROGRAMS_TAB)? 'category-item selected': 'category-item'}
                         ref={node =>  this.programTab=node} onClick={this.handleTab}>برنامه ها</div>

                    <div className={(this.state.cTab === consts.MEDIAS_TAB)? 'category-item selected': 'category-item'}
                         ref={node =>  this.mediaTab=node} onClick={this.handleTab}>رسانه ها</div>

                </div>

                {filter}


                <div className='list-container'>

                    {items}

                </div>

                <div className='break-line'/>

            </div>
        );
    }
}

export default Content;