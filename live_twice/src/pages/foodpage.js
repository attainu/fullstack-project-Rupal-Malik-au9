import React, { PureComponent } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import Restaurant from '../Restaurant';
export default class Foodpage extends PureComponent {
    render() {
        return (
            <div>
                <h2>Foodpage</h2>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "marginTop": "2rem" }}>
                
                 
                    <Restaurant/>
                </div>
                <Footer />
            </div>
        )
    }
}
