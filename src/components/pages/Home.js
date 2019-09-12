import React, {Component} from 'react';
import Content from "../sections/Content";
import SchoolMembers from "../sections/SchoolMembers";

class Home extends Component {
    render() {
        return (
            <>

                <Content/>

                <SchoolMembers/>

            </>
        );
    }
}

export default Home;