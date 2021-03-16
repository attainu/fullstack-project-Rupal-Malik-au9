import React, { PureComponent } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
export default class Aboutpage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <h2>About us</h2>
                <Footer />
            </div>
        )
    }
}
