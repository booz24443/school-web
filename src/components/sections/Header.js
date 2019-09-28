import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {consts} from '../../config/config';
import { NavLink } from 'react-router-dom';
import {handleModal, handleTab} from "../../store/actions/mainActions";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Header extends Component {



    render() {

        /* کلاس ها کارنامه ها پیام ها پشتیبانی */

        let authBtn;
        let header;

        if (this.props.logged)
            authBtn = <li>پروفایل</li>;

        else
            authBtn =
                <>
                    <li>ورود</li>
                    <li>ثبت نام</li>
                </>;


        if (this.props.width < 901) {

            header = '';

        } else {

            header =
                <nav className='dis-flex'>
                    <ul className='auth-nav dis-flex'>

                        {authBtn}

                    </ul>

                    <div className='seprate-line'/>

                    <ul className='main-nav dis-flex'>


                        <li>
                            <Link activeClass="active"
                                  to="content"
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  duration={600}
                                  ignoreCancelEvents={false}
                                  onClick={() => this.props.handleTab(consts.POSTS_TAB)}
                            >
                                اطلاعیه ها
                            </Link>
                        </li>


                        <li >
                            <Link activeClass="active"
                                  to="content"
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  duration={600}
                                  ignoreCancelEvents={false}
                                  onClick={() => this.props.handleTab(consts.PROGRAMS_TAB)}
                            >
                                برنامه ها
                            </Link>
                        </li>

                        <li>
                            <Link activeClass="active"
                                  to="content"
                                  spy={true}
                                  smooth={true}
                                  hashSpy={true}
                                  duration={600}
                                  ignoreCancelEvents={false}
                                  onClick={() => this.props.handleTab(consts.MEDIAS_TAB)}
                            >
                                <NavLink to="/">
                                رسانه ها
                                </NavLink>
                            </Link>
                        </li>


                        <li><NavLink to="/members">اعضای مجموعه</NavLink></li>
                        <li><NavLink to="/about">درباره مدرسه</NavLink></li>

                    </ul>
                </nav>;
        }


        return (
            <div className='nav header'>

                {header}

                <NavLink to='/' className='logo'/>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    logged: state.data.logged,
    width: state.data.width,
    height: state.data.height
});

export default connect(mapStateToProps, {handleModal, handleTab})(Header);