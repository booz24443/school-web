import React, {Component} from 'react';
import {Provider} from 'react-redux';

import store from './store/store';

import Header from './components/Header';
import Footer from './components/Footer';
import Slider from "./components/Slider";
import Content from "./components/Content";
import Members from "./components/Members";

class App extends Component {


    render() {
        return (

            <Provider store={store}>

                <div className='main-con'>

                    <Header/>

                    <Slider/>


                    <Content/>

                    <Members/>

                    <Footer/>

                </div>

            </Provider>
        );
    }
}

export default App;