import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {consts} from '../../config/config';
import { NavLink } from 'react-router-dom';
import {handleModal, handleTab} from "../../store/actions/mainActions";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import LoginModal from "../modal/LoginModal";


class Header extends Component {


    constructor() {
        super();

        this.handleLogin = this.handleLogin.bind(this);

    }


    handleLogin() {
        this.props.handleModal(consts.LOGIN_MODAL);
    }



    render() {


        let authBtn;
        let header;

        if (this.props.logged)
            authBtn =
                <>
                    <li >پروفایل</li>
                    <li >کلاس ها</li>
                    <li >کارنامه ها</li>
                    <li >پیام ها</li>
                    <li >پشتیبانی</li>
                </>;

        else
            authBtn =
                <>
                    <li onClick={this.handleLogin}>ورود</li>
                    <li onClick={this.handleLogin}>ثبت نام</li>
                </>;


        if (this.props.width < 1200) {

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
                                  onClick={() => this.props.handleTab(consts.POST)}
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
                                  onClick={() => this.props.handleTab(consts.PROGRAM)}
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
                                  onClick={() => this.props.handleTab(consts.MEDIA)}
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

                <LoginModal/>

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