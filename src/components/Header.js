import React, {Component} from 'react';

class Header extends Component {



    render() {
        return (
            <div className='nav header'>


                <nav className='dis-flex'>

                    <ul className='auth-nav dis-flex'>

                        <li>ورود</li>
                        <li>ثبت نام</li>

                    </ul>

                    <div className='seprate-line'/>

                    <ul className='main-nav dis-flex'>

                        <li>اطلاعیه ها</li>
                        <li>برنامه ها</li>
                        <li>رسانه ها</li>
                        <li>اعضای مجموعه</li>
                        <li>درباره مدرسه</li>

                    </ul>

                </nav>

                <div className='logo'/>



            </div>
        );
    }
}

export default Header;