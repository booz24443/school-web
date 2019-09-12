import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Slider from './sections/Slider';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Members from "./pages/Members";

class SiteTemplate extends Component {

    render() {
        return (
        <div className='main-con'>

            <Header/>

            <Slider/>

            <Switch>

                <Route path="/" component={Home} exact/>
                <Route path="/members" component={Members} exact/>
                <Route path="/about" component={About} exact/>

            </Switch>

            <Footer/>

        </div>
        );
    }
}

export default SiteTemplate;