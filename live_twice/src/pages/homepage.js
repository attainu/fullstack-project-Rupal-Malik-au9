import React, { PureComponent } from 'react'
import Header from './../components/header';
import Navbar from './../components/navbar';
import Footer from "./../components/Footer";
import CategoriesSection from './../components/categories_section';
export default class Homepage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <CategoriesSection />
                <Footer />
            </div>
        )
    }
}
