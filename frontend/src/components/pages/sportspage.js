import React, { PureComponent } from "react";
import Navbar from "../navbar";
import Footer from "../Footer";
import Sports from "../../Sports";
export default class Sportspage extends PureComponent {
  render() {
    return (
      <div>
        <h2>Sportspage</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <div class="card mb-3" style={{ "max-width": "48rem" }}>
            <div class="card-body">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg"
                style={{ width: "44rem" }}
                class="card-img-top"
                alt="..."
              />
              <h5 class="card-title">Essential Spa & Body Treatments</h5>
              <p class="card-text">
                In 2019, my husband and I took a trip to France to attend the
                wedding of my former exchange student, Christelle......
              </p>
              <p class="card-text" style={{ color: "green" }}>
                By John walker <i>from San Diego</i>
                <br />
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <Sports />
        </div>
        <Footer />
      </div>
    );
  }
}
