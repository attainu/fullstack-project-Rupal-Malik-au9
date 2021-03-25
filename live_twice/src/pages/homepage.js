import React, { PureComponent } from 'react'
import Header from './../components/header';
import Navbar from './../components/navbar';
import Footer from "./../components/Footer";
import Allposts from '../Allposts';
import CategoriesSection from './../components/categories_section';
export default class Homepage extends PureComponent {
    render() {
        return (
            <div>
                <Header />
                <CategoriesSection />
                {/* <Allposts /> */}
                <Footer />
            </div>
        )
    }
}
