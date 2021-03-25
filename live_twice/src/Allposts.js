import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Component } from 'react'
import { connect } from 'react-redux';
// import Search from './restcomponents/Search';
import Restaurants from './restcomponents/Restaurants';
import { setRestaurantsOnAll } from './redux/actions/index';

class Allposts extends Component {

    componentDidMount() {
        this.props.setRestaurantsOnAll()
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
        setRestaurantsOnAll: () => dispatch(setRestaurantsOnAll())
    }
}

export default connect(null, mapDispatchToProps)(Allposts);
