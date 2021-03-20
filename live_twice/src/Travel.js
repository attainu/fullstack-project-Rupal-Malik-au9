import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
// import Search from './restcomponents/Search';
import Restaurants from './restcomponents/Restaurants';
import {setRestaurantsOnTravel } from './redux/actions/index';

class Travel extends Component {

    componentDidMount() {
        this.props.setRestaurantsOnTravel()
    }
    render() {
        return (
            <section><BrowserRouter>
                {/* <Search /> */}
                <Restaurants />
            </BrowserRouter>
            </section>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setRestaurantsOnTravel: () => dispatch(setRestaurantsOnTravel())
    }
}

export default connect(null, mapDispatchToProps)(Travel);
