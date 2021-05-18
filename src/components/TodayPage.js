import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../actions/searchActions'

class TodayPage extends Component {


    componentDidMount() {
        getLocation();
    }

    render() {
        const { cityName } = this.props.search
        return (
            <div>
                <h4>dzisiaj</h4>
                <p>twoja obecna pozycja to: {cityName} </p>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    search: state.search.geolocationCityName
})
export default connect(mapStateToProps, { getLocation })(TodayPage);
