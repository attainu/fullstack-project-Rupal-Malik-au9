import React, { Component } from 'react';
import RestCard from '../RestCard';
import { connect } from 'react-redux';


class Restaurants extends Component {

    render() {
        return (<>
        {console.log(this.props)}
            {!this.props ? (<h2>Loading...</h2>) : (
            <section style={{ width: '80%', margin: '1rem auto' }}> 
            <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "paddingBottom": "2%" }}>

                {this.props.restaurants.map(rest => {

                    return <RestCard rest={rest} key={rest._id} />
                })} </div>

            </section>)}
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants
    }
}

export default connect(mapStateToProps)(Restaurants);