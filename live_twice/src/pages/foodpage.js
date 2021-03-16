import React, { PureComponent } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
export default class Foodpage extends PureComponent {
    render() {
        return (
            <div>
                <Navbar />
                <h2>Foodpage</h2>
                <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "marginTop": "2rem" }}>
                    <div class="card mb-3" style={{ "max-width": "48rem" }}>
                        <div class="card-body">
                            <img src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg" style={{ "width": "44rem" }} class="card-img-top" alt="..." />
                            <h5 class="card-title">Essential Spa & Body Treatments</h5>
                            <p class="card-text">In 2019, my husband and I took a trip to France to attend the wedding  of my former exchange student, Christelle......</p>
                            <p class="card-text" style={{ "color": "green" }}>By John walker <i>from San Diego</i><br /><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div class="card" style={{ "max-width": "48rem" }}>
                        <div class="card-body">
                            <img src="https://zru9o3ijb9-flywheel.netdna-ssl.com/wp-content/uploads/2020/04/Mostar-Bridge-Horizontal.jpg" style={{ "width": "44rem" }} class="card-img-bottom" alt="..." />
                            <h5 class="card-title">CONFUSION IN SMALL-TOWN FRANCE
                            </h5>
                            <p class="card-text">
                                In 2019, my husband and I took a trip to France to attend the wedding  of my former exchange student, Christelle......
                            </p>
                            <p class="card-text" style={{ "color": "green" }}>
                                By Harry Thomson <i>from San Diego</i><br /><small class="text-muted">Last updated 3 mins ago</small>
                            </p>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
