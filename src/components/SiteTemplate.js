import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Slider from './sections/Slider';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Members from "./pages/Members";
import connect from "react-redux/es/connect/connect";
import {handleSize} from "../store/actions/mainActions";

class SiteTemplate extends Component {


    constructor(props) {
        super(props);

        // this.state = {
        //     ready: false
        // };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.props.handleSize(window.innerWidth, window.innerHeight);
    }

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

const mapStateToProps = state => ({
    width: state.data.width,
    height: state.data.height,
});

export default connect(mapStateToProps, {handleSize})(SiteTemplate);