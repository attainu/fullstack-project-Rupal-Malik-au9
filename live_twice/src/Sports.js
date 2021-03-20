import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
// import Search from './restcomponents/Search';
import Restaurants from './restcomponents/Restaurants';
import {setRestaurantsOnSports } from './redux/actions/index';

class Sports extends Component {

    componentDidMount() {
        this.props.setRestaurantsOnSports()
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
        setRestaurantsOnSports: () => dispatch(setRestaurantsOnSports())
    }
}

export default connect(null, mapDispatchToProps)(Sports);
