import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
// import Search from './restcomponents/Search';
import Restaurants from './restcomponents/Restaurants';
import { setRestaurantsOnMount } from './redux/actions/index';

class Restaurant extends Component {

    componentDidMount() {
        this.props.setRestaurantsOnMount()
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
        setRestaurantsOnMount: () => dispatch(setRestaurantsOnMount())
    }
}

export default connect(null, mapDispatchToProps)(Restaurant);
