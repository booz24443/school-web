import React, {Component} from 'react';
import Content from "../sections/Content";
import SchoolMembers from "../sections/SchoolMembers";
import {connect} from 'react-redux';
import {handleSize} from "../../store/actions/mainActions";
import {consts} from "../../config/config";

class Home extends Component {



    render() {
        return (
            <>

                <Content/>

                {/* not showing members on mobileView*/}
                {(this.props.width < consts.MOBILE_VIEW_WIDTH)? '' : <SchoolMembers/>}

            </>
        );
    }
}

const mapStateToProps = state => ({
    width: state.data.width,
});


export default connect(mapStateToProps, {})(Home);