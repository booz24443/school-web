import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/store';

import SiteTemplate from "./components/SiteTemplate";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>

                    <Switch>

                        <Route path="/" component={SiteTemplate}/>

                    </Switch>

                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;