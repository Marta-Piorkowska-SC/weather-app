import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLocation } from '../store/reducers/search/actions/getLocation'
import Spinner from 'react-bootstrap/Spinner';

class TodayPage extends Component {
    state = {
        loading: true,
    }

    componentDidMount() {
        this.props.getLocation();
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
