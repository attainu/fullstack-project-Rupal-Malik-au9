import React, { PureComponent } from "react";
import Header from "../header";
// import Navbar from './../components/navbar';
import Footer from "../Footer";
// import Allposts from '../Allposts';
import CategoriesSection from "../categories_section";
export default class Homepage extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <CategoriesSection />
        <h1>Login to see the posts</h1>
        <Footer />
      </div>
    );
  }
}
