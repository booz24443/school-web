import React, {Component} from 'react';

import manager from '../assets/images/manager.svg';

class Members extends Component {



    render() {
        return (
            <>

                <div className='list-container'>


                    <div className='member'>
                        <img className='icon' src={manager}/>

                        <div className='title'>محمد نوری</div>
                        <div className='job'>توسعه دهنده وب و اپلیکیشن</div>
                        <div className='desc'>دارای 20 سال سابقه کاری، فوق مسلط به MVC و ASDP.NET ، تسلط بر SQLPostgress و MongoDB</div>

                    </div>

                    <div className='member'>
                        <img className='icon' src={manager}/>

                        <div className='title'>محمد نوری</div>
                        <div className='job'>توسعه دهنده وب</div>
                        <div className='desc'>دارای 20 سال سابقه کاری، فوق مسلط به MVC و ASDP.NET ، تسلط بر SQLPostgress و MongoDB</div>

                    </div>

                    <div className='member'>
                        <img className='icon' src={manager}/>

                        <div className='title'>محمد نوری</div>
                        <div className='job'>توسعه دهنده وب و اپلیکیشن</div>
                        <div className='desc'>دارای 20 سال سابقه کاری، فوق مسلط به MVC و ASDP.NET ، تسلط بر SQLPostgress و MongoDB</div>

                    </div>

                    <div className='member'>
                        <img className='icon' src={manager}/>

                        <div className='title'>محمد نوری</div>
                        <div className='job'>توسعه دهنده وب و اپلیکیشن</div>
                        <div className='desc'>دارای 20 سال سابقه کاری، فوق مسلط به MVC و ASDP.NET ، تسلط بر SQLPostgress و MongoDB</div>

                    </div>


                </div>


            </>
        );
    }
}

export default Members;