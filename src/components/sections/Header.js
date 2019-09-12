import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { NavLink } from 'react-router-dom';
import {handleModal} from "../../store/actions/mainActions";

class Header extends Component {



    render() {

        let authBtn;

        if (this.props.logged)
            authBtn = <li>پروفایل</li>;

        else
            authBtn =
                <>
                    <li>ورود</li>
                    <li>ثبت نام</li>
                </>;


        return (
            <div className='nav header'>


                <nav className='dis-flex'>

                    <ul className='auth-nav dis-flex'>

                        {authBtn}

                    </ul>

                    <div className='seprate-line'/>

                    <ul className='main-nav dis-flex'>

                        <li>اطلاعیه ها</li>
                        <li>برنامه ها</li>
                        <li>رسانه ها</li>
                        <li><NavLink to="/members">اعضای مجموعه</NavLink></li>
                        <li><NavLink to="/about">درباره مدرسه</NavLink></li>

                    </ul>

                </nav>

                <NavLink to='/' className='logo'/>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    logged: state.data.logged,
});

export default connect(mapStateToProps, {handleModal})(Header);