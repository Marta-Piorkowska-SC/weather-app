import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../actions/searchActions'
import Spinner from 'react-bootstrap/Spinner';

class TodayPage extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        getLocation();
    }

    render() {
        const { cityName } = this.props.search
        let spiner = <Spinner animation="border" />
        const content = `działa`


        return (
            <div className="today-weather">

                {this.state.loading ? spiner : content}


            </div>
        );
    }
}
const mapStateToProps = state => ({
    search: state.search.geolocationCityName
})
export default connect(mapStateToProps, { getLocation })(TodayPage);
