import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRestaurantsOnTravel,setRestaurantsOnElectronics} from './../../redux/actions/index';
import { Form} from 'react-bootstrap';

class Search extends Component {
    
    render() {
      return (
            <section className='Search' style={{ marginLeft: '12%' }}>
                
                <Form inline>
                <Link to='/travel'>
               
            <input type="button" id="travel" name="toggle" value="travel" onClick={(event) => this.props.setRestaurantsOnTravel()}/></Link>
            
  
  
   </Form>
                <div className="subline order" style={{ "fontWeight": "800", "fontSize": "20px", "color": "green", "paddingTop": "10px" }}>Best coupons today</div>

            </section>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        setRestaurantsOnTravel: () => dispatch(setRestaurantsOnTravel()),
        setRestaurantsOnElectronics: () => dispatch(setRestaurantsOnElectronics())
    }
}

export default connect(null, mapDispatchToProps)(Search);