import React, { PureComponent } from 'react';
import Navbar from './../components/navbar';
import Footer from './../components/Footer';
import Travel from '../Travel.js';
export default class Travelpage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <h2>Travelpage</h2>
                 <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "marginTop": "2rem" }}>
                 <Travel/>
            
                </div> 
                <Footer />
            </div>
        )
    }
}
      



